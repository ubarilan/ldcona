type grade = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    grade: grade | null;
    title: string;
}

export interface Button {
    name: string;
    href?: string;
}

export interface TaskAsTeacher {
    id: number;
    timestamp: number;
    owner: number;
    acquired?: null | string;
    teacherNotes?: null | string;
    studentNotes?: null | string;
}

type hour = number | string; //Ex: 8 or '8'
type minute = number | string; //Ex: 30 or '30'
export type dclock = `${hour}:${minute}`; //Ex: '8:30'
