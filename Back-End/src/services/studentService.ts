import { PrismaClient } from '@prisma/client';
import { Student } from '../Interfaces/Interdaces'
const prisma = new PrismaClient();

export const StudentService = {
    async createStudent({ nome, sobrenome, dataNascimento, cpfOuRg, email, sobre }: Student) {
        return prisma.student.create({
            data: {
                nome,
                sobrenome,
                dataNascimento: new Date(dataNascimento),
                cpfOuRg,
                email,
                sobre,
            },
        });
    },

    async findAllStudents() {
        return prisma.student.findMany();
    },

    async findStudentById(id: number) {
        return prisma.student.findUnique({
            where: { id: Number(id) },
        });
    },

    async updateStudent(id: number, data: Partial<Student>) {
        return prisma.student.update({
            where: { id: Number(id) },
            data,
        });
    },

    async deleteStudent(id: number) {
        return prisma.student.delete({
            where: { id: Number(id) },
        });
    },
};
