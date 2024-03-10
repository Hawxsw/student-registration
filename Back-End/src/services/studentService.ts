import { PrismaClient } from '@prisma/client';
import { Student } from '../Interfaces/Interdaces'
const prisma = new PrismaClient();

export const StudentService = {
    async createStudent({ name, lastName, birthDate, cpfOrRg, email, about }: Student) {
        return prisma.student.create({
            data: {
                name,
                lastName,
                birthDate: new Date(birthDate),
                cpfOrRg,
                email,
                about,
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
