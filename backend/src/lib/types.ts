export interface Time {
    id?: number;
    timestamp: number;
    owner: number;
    acquired?: null | string;
    teacherNotes?: null | string;
    studentNotes?: null | string;
}

declare global {
    namespace Express {
        interface User {
            id: number;
        }
    }
}
