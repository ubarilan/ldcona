import Ldcona from '../../ldcona';
import { Router, Request, Response } from 'express';
import passport from 'passport';
export function initMainRouter(this: Ldcona): void {
    this.mainRouter = Router();
    const router: Router = this.mainRouter;

    router.post(
        '/login',
        passport.authenticate('local', {
            successRedirect: '/success-login',
            failureRedirect: '/fail-login',
        })
    );

    router.get('*', (req: Request, res: Response) => {
        res.send(`
        <form action="/login" method="post">
        <input name="email" id="email" placeholder="">
        <input type="submit">
        </form>
        `);
    });
}
