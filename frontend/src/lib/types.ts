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
    href: string;
}

export interface Task {
    id: number;
    name: string;
    studentNotes: string;
    teacherNotes: string;
    date: string;
}
