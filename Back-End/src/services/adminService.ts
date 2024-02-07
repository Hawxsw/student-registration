import bcrypt from 'bcrypt';
import { prisma } from '../prisma/prismaClient';
import { Admin } from '../Interfaces/Interdaces';

interface AdminUpdateData extends Partial<Admin> {
    senhaHash?: string;
}

export const AdminService = {
    async criarAdmin({ nome, username, senha }: Admin) {
        const senhaHash = await bcrypt.hash(senha, 10);
        return prisma.admin.create({
            data: {
                nome,
                username,
                senhaHash,
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

    async listarAdmins({ pagina = 1, limite = 10, filtro = {} }) {
        const skip = (pagina - 1) * limite;
        return prisma.admin.findMany({
            where: filtro,
            skip,
            take: limite,
        });
    },

    async deletarAdmin(id: string) {
        return prisma.admin.delete({
            where: {
                id: Number(id),
            },
        });
    },

    async atualizarAdmin(id: string, dadosAtualizados: AdminUpdateData) {
        const { senha, ...restoDosDados } = dadosAtualizados;
        let dadosParaAtualizar = restoDosDados;

        if (senha) {
            const senhaHash = await bcrypt.hash(senha, 10);
            dadosParaAtualizar = { ...dadosParaAtualizar, senhaHash };
        }

        return prisma.admin.update({
            where: { id: Number(id) },
            data: dadosParaAtualizar,
        });
    },
};
