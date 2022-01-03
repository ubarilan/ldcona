import Ldcona from '../../ldcona';
import { Router, Request, Response } from 'express';
import { CensoredUser, CensoredTime } from '../types';

export function initStudentRouter(this: Ldcona): void {
    this.studentRouter = Router();
    const router: Router = this.studentRouter;

    router.get('/teachers', async (req: Request, res: Response) => {
        const sql: string = 'SELECT id, firstName, lastName, email FROM users;';
        const teachers: CensoredUser[] = (
            await this.mysqlConnection.query(sql)
        )[0];
        res.send(teachers);
    });

    router.get('/teachers/:id', async (req: Request, res: Response) => {
        const sql: string =
            'SELECT id, firstName, lastName, email FROM users WHERE id = ?;';
        const teacher: CensoredUser = await this.getFirstQueryResult(
            sql,
            req.params.id
        );
        if (teacher) {
            res.send(teacher);
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
        )[0];
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
            const time: CensoredTime = await this.getFirstQueryResult(
                getTimeSql,
                [req.params.id, req.params.timeid]
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
            if (updated) res.send({ status: 'success' });
            else res.status(500).send({ status: 'error' });
            debugger;
        }
    );
}
