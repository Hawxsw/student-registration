export interface Admin {
    nome: string;
    username: string;
    senha: string;
}

export interface Student {
    nome: string;
    sobrenome: string;
    dataNascimento: Date | string;
    cpfOuRg: string;
    email: string;
    sobre?: string;
}
