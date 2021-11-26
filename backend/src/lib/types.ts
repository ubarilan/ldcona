// Type for times stored in database
export interface Time {
    id?: number;
    timestamp: number;
    owner: number;
    acquired?: null | string;
    teacherNotes?: null | string;
    studentNotes?: null | string;
}

// Global type for req.user
declare global {
    namespace Express {
        interface User {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            passport: string;
        }
    }
}
