import Ldcona from '../ldcona';
import { CensoredTime, CensoredUser, Time, User } from './types';

export async function checkIfTeacherExists(
    this: Ldcona,
    id: number | string
): Promise<boolean> {
    const sql: string =
        'SELECT id, firstName, lastName, email FROM users WHERE id = ?;';
    const teacher: CensoredUser = await this.getFirstQueryResult(sql, id);

    return !!teacher;
}

export function censorTime(time: Time): CensoredTime {
    const censoredTime: Time = Object.assign({}, time);
    delete censoredTime.studentNotes;
    delete censoredTime.acquired;
    return censoredTime as CensoredTime;
}

export function censorUser(user: User): CensoredUser {
    const censoredUser: User = Object.assign({}, user);
    delete censoredUser.password;
    return censoredUser as CensoredUser;
}
