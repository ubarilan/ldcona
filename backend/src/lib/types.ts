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

type grade = 1 | 2 | 3 | 4 | 5 | 6;
export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    grade: grade | null;
    title: string;
}

export interface StudentUser {
    email: string;
    name: string;
    picture: string;
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
            grade: grade | null;
            title: string;
        }

        interface Request {
            studentUser: StudentUser;
        }
    }
}

export interface CensoredUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    grade: grade | null;
    title: string;
}

export interface Student {
    id: number;
    name?: string;
    email: string;
}
