import express, {
    Application,
    Router,
    Request,
    Response,
    NextFunction,
    Handler,
} from 'express';
import { Connection } from 'mysql';
import session from 'express-session';
import { config } from 'dotenv';
import { connectToDatabase } from './lib/mysql';
import passport from 'passport';
import { OAuth2Client } from 'google-auth-library';

import initializePassport from './lib/passport-config';
import { initMainRouter } from './lib/routers/main';
import { initStudentRouter } from './lib/routers/student';

// Import utility functions
import { checkIfTeacherExists } from './lib/utils';
import { EMAIL_HOSTNAME } from './static/consts';

// Configure environment variables
config();

export default class Ldcona {
    public passport = passport;
    protected mysqlConnection: Connection;
    protected webApp: Application;
    protected mainRouter: Router;
    protected studentRouter: Router;
    protected googleClient: OAuth2Client;

    private initMainRouter: () => void = initMainRouter;
    private initStudentRouter: () => void = initStudentRouter;

    // Utility functions
    public checkIfTeacherExists = checkIfTeacherExists;

    constructor(
        database_host: string,
        database_port: number,
        database_user: string,
        database_pass: string,
        database_name: string,
        private listen_port: number
    ) {
        this.passport = passport;
        this.webApp = express();
        this.initRouters();
        this.connectAppToDatabase(
            database_host,
            database_port,
            database_user,
            database_pass,
            database_name
        );
        this.googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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

    // Initiate routers
    private initRouters(): void {
        this.initMainRouter();
        this.initStudentRouter();
    }

    // Initiate web app
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
            this.passport,
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

        this.webApp.use('/api/student', this.studentRouter);
        this.webApp.use('/api', this.mainRouter);

        this.webApp.listen(this.listen_port, () => {
            console.log(`web server running on port ${this.listen_port}`);
        });
    }

    protected googleAuthHandler(): Handler {
        return async (req: Request, res: Response, next: NextFunction) => {
            const { token } = req.body;
            console.log('token', token);
            if (!token) {
                res.status(400).send({
                    status: 'bad request',
                    message: 'no token provided in body',
                });
                return;
            }

            try {
                const ticket = await this.googleClient.verifyIdToken({
                    idToken: String(token),
                    audience: process.env.GOOGLE_CLIENT_ID,
                });
                const { name, email, picture } = ticket.getPayload();

                if (!email.endsWith(EMAIL_HOSTNAME))
                    res.status(403).send({
                        status: 'forbidden',
                        message: `Your email address is not allowed only email with the domain ${EMAIL_HOSTNAME} are allowed to sign in`,
                    });

                console.log(name, email, picture);
                res.send({
                    status: 'success',
                    message: 'google auth successful',
                    name,
                    email,
                    picture,
                });
            } catch {
                res.status(500).send({
                    status: 'error',
                    message: 'google auth failed',
                });
            }
        };
    }

    // Get the first result of a database query
    protected async getFirstQueryResult(sql: string, args?: any): Promise<any> {
        let queryRes = await this.mysqlConnection.query(sql, args);
        if (queryRes[0].length < 1) return null;
        return queryRes[0][0];
    }

    // Utility function to check if a request is authenticated, moves on if it is, and if it's not, the user will be redirected to /
    public checkAuthenticated(
        req: Request,
        res: Response,
        next: NextFunction
    ): void {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/');
        }
    }
}
