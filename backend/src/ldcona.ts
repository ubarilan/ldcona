import express, { Application, Router } from 'express';
import { Connection } from 'mysql';
import session from 'express-session';
import { config } from 'dotenv';
import { connectToDatabase } from './lib/mysql';
import passport from 'passport';

import initializePassport from './lib/passport-config';
import { initMainRouter } from './lib/routers/main';

config();

export default class Ldcona {
    protected mysqlConnection: Connection;

    protected webApp: Application;
    protected mainRouter: Router;

    private initMainRouter: () => void = initMainRouter;

    constructor(
        database_host: string,
        database_port: number,
        database_user: string,
        database_pass: string,
        database_name: string
    ) {
        this.webApp = express();
        this.initRouters();
        this.connectAppToDatabase(
            database_host,
            database_port,
            database_user,
            database_pass,
            database_name
        );
        this.initWebApp();
    }

    private async connectAppToDatabase(
        database_host: string,
        database_port: number,
        database_user: string,
        database_pass: string,
        database_name: string
    ): Promise<void> {
        this.mysqlConnection = connectToDatabase(
            database_host,
            database_port,
            database_user,
            database_pass,
            database_name
        );
    }

    private initRouters(): void {
        this.initMainRouter();
    }

    private initWebApp(): void {
        this.webApp.use(express.json());
        this.webApp.use(express.urlencoded({ extended: true }));
        this.webApp.use(express.json());

        this.webApp.use(
            session({
                secret: process.env.SESSION_SECRET,
                resave: false,
                saveUninitialized: false,
            })
        );

        initializePassport(
            passport,
            (email) =>
                this.getFirstQueryResult(
                    'SELECT * FROM users WHERE email = ?',
                    email
                ),
            (id) =>
                this.getFirstQueryResult('SELECT * FROM users WHERE id = ?', id)
        );

        this.webApp.use(passport.initialize());
        this.webApp.use(passport.session());

        this.webApp.use('/', this.mainRouter);

        this.webApp.listen(80);
        console.log('web server running on port 80');
    }

    protected async getFirstQueryResult(sql: string, args?: any): Promise<any> {
        let queryRes = await this.mysqlConnection.query(sql, args);
        if (queryRes[0].length < 1) return null;
        return queryRes[0][0];
    }
}
