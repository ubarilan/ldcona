import Ldcona from '../ldcona';
import { CensoredUser } from './types';

export async function checkIfTeacherExists(
    this: Ldcona,
    id: number | string
): Promise<boolean> {
    const sql: string =
        'SELECT id, firstName, lastName, email FROM users WHERE id = ?;';
    const teacher: CensoredUser = await this.getFirstQueryResult(sql, id);

    return !!teacher;
}
