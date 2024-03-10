export interface Admin {
    name: string;
    username: string;
    password: string;
}

export interface Student {
    name: string;
    lastName: string;
    birthDate: Date | string;
    cpfOrRg: string;
    email: string;
    about?: string;
}
