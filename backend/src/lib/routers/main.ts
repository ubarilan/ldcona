import Ldcona from '../../ldcona';
import { Router, Request, Response } from 'express';

export function initMainRouter(this: Ldcona): void {
    this.mainRouter = Router();
    const router: Router = this.mainRouter;

    router.get('*', (req: Request, res: Response) => {
        res.send('joe');
    });
}
