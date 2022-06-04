import Ldcona from '../../ldcona';
import { Router, Request, Response } from 'express';
import { CensoredUser, CensoredTime, Time, User, Student } from '../types';
import { censorTime, censorUser } from '../utils';

export function initStudentRouter(this: Ldcona): void {
    this.studentRouter = Router();
    const router: Router = this.studentRouter;

    String.prototype.endsWith = function (suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };

    router.get('/userinfo', (req: Request, res: Response) => {
        if (req.studentUser) {
            res.send({ user: req.studentUser });
        } else {
            res.send({ user: null });
        }
    });

    // Teachers database handler
    router.get('/teachers', async (req: Request, res: Response) => {
        const sql: string = 'SELECT id, firstName, lastName, email FROM users;';
        const teachers: CensoredUser[] = (
            await this.mysqlConnection.query(sql)
        )[0].map((teacher: User) => censorUser(teacher));
        res.send(teachers);
    });
    router.get('/teachers/:id', async (req: Request, res: Response) => {
        const sql: string =
            'SELECT id, firstName, lastName, email FROM users WHERE id = ?;';
        const teacher: User = await this.getFirstQueryResult(
            sql,
            req.params.id
        );
        if (teacher) {
            res.send(censorUser(teacher));
        } else {
            res.status(404).send({ status: 'teacher not found' });
        }
    });

    router.get('/teachers/:id/times', async (req: Request, res: Response) => {
        const teacherExists: boolean = await this.checkIfTeacherExists(
            req.params.id
        );
        if (!teacherExists)
            return res.status(404).send({ status: 'teacher not found' });

        const getTimesSql: string =
            'select id, timestamp, teacherNotes, owner from times WHERE acquired IS NULL AND owner = ?;';
        const times: CensoredTime[] = (
            await this.mysqlConnection.query(getTimesSql, req.params.id)
        )[0].map((time: Time) => censorTime(time));
        res.send(times);
    });

    router.get(
        '/teachers/:id/times/:timeid',
        async (req: Request, res: Response) => {
            const teacherExists: boolean = await this.checkIfTeacherExists(
                req.params.id
            );
            if (!teacherExists)
                return res.status(404).send({ status: 'teacher not found' });

            const getTimeSql: string =
                'select id, timestamp, teacherNotes, owner from times WHERE acquired IS NULL AND owner = ? AND id = ?;';
            const time: CensoredTime = censorTime(
                await this.getFirstQueryResult(getTimeSql, [
                    req.params.id,
                    req.params.timeid,
                ])
            );
            if (!time)
                return res.status(404).send({ status: 'time not found' });

            res.send(time);
        }
    );

    router.post(
        '/teachers/:id/times/:timeid/acquire',
        async (req: Request, res: Response) => {
            const teacherExists: boolean = await this.checkIfTeacherExists(
                req.params.id
            );
            if (!teacherExists)
                return res.status(404).send({ status: 'teacher not found' });

            const getTimeSql: string =
                'select id, timestamp, teacherNotes, owner from times WHERE acquired IS NULL AND owner = ? AND id = ?;';
            const time: CensoredTime = await this.getFirstQueryResult(
                getTimeSql,
                [req.params.id, req.params.timeid]
            );
            if (!time)
                return res.status(404).send({ status: 'time not found' });

            const studentName = req.body.studentName || 'Anonymous Student';

            const updateTimeSql: string =
                'UPDATE times SET acquired = ? WHERE id = ?';
            const sqlResults = await this.mysqlConnection.query(updateTimeSql, [
                studentName,
                req.params.timeid,
            ]);
            const updated: boolean = sqlResults[0].affectedRows > 0;
            if (updated) res.send({ status: 'ok' });
            else res.status(500).send({ status: 'error' });
        }
    );

    // Students database handler
    router.post('/add', async (req: Request, res: Response) => {
        if (!req.body.email.endsWith('@ld.amalnet.k12.il'))
            return res.status(400).send({ status: 'invalid email' });
        const sql =
            'INSERT INTO students (name, email) SELECT * FROM (SELECT ?, ?) AS tmp WHERE not exists (select * from students where email = ?);';
        const sqlResults = await this.mysqlConnection.query(sql, [
            req.body.name,
            req.body.email,
            req.body.email,
        ]);
        res.status(201).send({ status: 'ok' });
    });

    router.get(
        '/students',
        this.checkAuthenticated,
        async (req: Request, res: Response) => {
            const sql: string = 'SELECT id, name, email FROM students;';
            const students: Student[] = (
                await this.mysqlConnection.query(sql)
            )[0];
            res.send(JSON.stringify(students));
        }
    );
}
