import express, { Application, Router } from 'express';
import { Connection } from 'mysql';
import session from 'express-session';
import { config } from 'dotenv';
import { connectToDatabase } from './lib/mysql';

import { initMainRouter } from './lib/routers/main';

config();

export default class Ldcona {
    protected mysqlConnection: Connection;

    protected webApp: Application;
    protected mainRouter: Router;

    protected authenticatedSessions: Map<string, number> = new Map();

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
        this.initWebApp();
        this.connectAppToDatabase(
            database_host,
            database_port,
            database_user,
            database_pass,
            database_name
        );
    }

    private connectAppToDatabase(
        database_host: string,
        database_port: number,
        database_user: string,
        database_pass: string,
        database_name: string
    ): void {
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

    private initWebApp() {
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

        this.webApp.use('/', this.mainRouter);

        this.webApp.listen(80);
        console.log('web server running on port 80');
    }
}
