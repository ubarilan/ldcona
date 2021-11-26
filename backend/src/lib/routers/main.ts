import Ldcona from '../../ldcona';
import { Router, Request, Response, NextFunction } from 'express';
export function initMainRouter(this: Ldcona): void {
    this.mainRouter = Router();
    const router: Router = this.mainRouter;

    router.post(
        '/login', this.passport.authenticate('local', {successRedirect: '/login-success', failureRedirect:'/login-fail' }))

    router.post(
        '/logout', (req,res) => {
            req.logout();
            res.redirect("/");
        })
    
    router.get('/login', (req: Request, res: Response) => {
        res.send(`
        <form action="/login" method="post">
        <input name="email" id="email" placeholder="">
        <input name="password" type="password id="password" placeholder="">
        <input type="submit">
        </form>
        `);
    });
    
    router.get('*', (req: Request, res: Response) => {
        res.send(`
        <form action="/login" method="post">
        <input name="email" id="email" placeholder="">
        <input name="password" type="password id="password" placeholder="">
        <input type="submit">
        </form>

        <form action="/logout" method="post">
        <button type="submit">logout</button>
        </form>
        `);

    });

    
}
