import Ldcona from '../../ldcona';
import { Router, Request, Response, NextFunction } from 'express';
import { Time } from '../types';
import { Query } from 'mysql2';

export function initMainRouter(this: Ldcona): void {
    this.mainRouter = Router();
    const router: Router = this.mainRouter;

    router.post(
        '/login',
        this.passport.authenticate('local', {
            successRedirect: '/login-success',
            failureRedirect: '/login-fail',
        })
    );

    router.post('/logout', (req: Request, res: Response) => {
        req.logout();
        res.redirect('/');
    });

    router.get(
        '/times',
        this.checkAuthenticated,
        async (req: Request, res: Response) => {
            let sql: string = 'SELECT * FROM times WHERE owner = ?';
            let userTimes: Time[] = (
                await this.mysqlConnection.query(sql, req.user.id)
            )[0];
            res.send(userTimes);
        }
    );

    router.post(
        '/times/add',
        this.checkAuthenticated,
        async (req: Request, res: Response) => {
            let timestamp: number = Number(req.body.timestamp);
            if (isNaN(timestamp)) res.status(400).send({ status: 'bad value' });
            else {
                let sql: string =
                    'INSERT INTO times(timestamp, owner, teacherNotes) VALUES(?, ?, ?)';
                this.mysqlConnection.query(sql, [
                    timestamp,
                    req.user.id,
                    req.body.teacherNotes || null,
                ]);
                res.send({ status: 'success' });
            }
        }
    );

    router.post(
        '/times/remove/',
        this.checkAuthenticated,
        async (req: Request, res: Response) => {
            let id: number = Number(req.body.timeID);
            if (isNaN(id)) res.status(400).send({ status: 'bad value' });
            else {
                let sql: string = 'DELETE FROM times WHERE id = ?';
                let sqlResults = await this.mysqlConnection.query(sql, id);
                if (sqlResults[0].affectedRows > 0)
                    res.send({ status: 'success' });
                else res.status(404).send({ status: 'time not found' });
            }
        }
    );

    router.get('*', (req: Request, res: Response) => {
        res.send(`
        <form action="/login" method="post">
        <input name="email" id="email" placeholder="">
        <input name="password" type="password" id="password" placeholder="">
        <input type="submit">
        </form>

        <form action="/logout" method="post">
        <button type="submit">logout</button>
        </form>

        <form action="/times/add" method="post">
        <input name="timestamp" id="timestamp">
        <input name="teacherNotes" id="teacherNotes">
        <input type="submit">
        </form>
        
        <form action="/times/remove" method="post">
        <input name="timeID" id="timeID">
        <input type="submit">
        </form>
        `);
    });
}
