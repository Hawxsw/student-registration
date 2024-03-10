import bcrypt from 'bcrypt';
import { prisma } from '../prisma/prismaClient';
import { Admin } from '../Interfaces/Interdaces';

interface AdminUpdateData extends Partial<Admin> {
    passwordHash?: string;
}

export const AdminService = {
    async createAdmin({ name, username, password }: Admin) {
        const passwordHash = await bcrypt.hash(password, 10);
        return prisma.admin.create({
            data: {
                name,
                username,
                passwordHash,
            },
        });
    },

    async searchAdmin(username: string) {
        return prisma.admin.findUnique({
            where: {
                username,
            },
        });
    },

    async listAdmins({ page = 1, limit = 10, filter = {} }) {
        const skip = (page - 1) * limit;
        return prisma.admin.findMany({
            where: filter,
            skip,
            take: limit,
        });
    },

    async deleteAdmin(id: string) {
        return prisma.admin.delete({
            where: {
                id: Number(id),
            },
        });
    },

    async updateAdmin(id: string, updatedData: AdminUpdateData) {
        const { password, ...restOfData } = updatedData;
        let dataToUpdate = restOfData;

        if (password) {
            const passwordHash = await bcrypt.hash(password, 10);
            dataToUpdate = { ...dataToUpdate, passwordHash };
        }

        return prisma.admin.update({
            where: { id: Number(id) },
            data: dataToUpdate,
        });
    },
};
