// Type for times stored in database
export interface Time {
    id?: number;
    timestamp: number;
    owner: number;
    acquired?: null | string;
    teacherNotes?: null | string;
    studentNotes?: null | string;
}

export interface CensoredTime {
    id?: number;
    timestamp?: number;
    owner?: number;
    teacherNotes?: null | string;
}

// Global type for req.user
declare global {
    namespace Express {
        interface User {
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            password: string;
        }
    }
}

export interface CensoredUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
}
