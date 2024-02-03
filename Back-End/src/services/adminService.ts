import bcrypt from 'bcrypt';
import { prisma } from '../prisma/prismaClient';
import { Admin } from '../Interfaces/Interdaces'

export async function criarAdmin({ nome, username, senha }: Admin): Promise<void> {
    const senhaHash = await bcrypt.hash(senha, 10);
    await prisma.admin.create({
        data: {
            nome,
            username,
            senhaHash: senhaHash,
        }
    })
}

export async function searchAdmin(username: string) {
    return await prisma.admin.findUnique({
        where: {
            username,
        },
    });
}

async function listarAdmins({ pagina = 1, limite = 10, filtro = {} }) {
    const skip = (pagina - 1) * limite;

    const admins = await prisma.admin.findMany({
        where: filtro,
        skip: skip,
        take: limite,
    });

    return admins;
}

export { listarAdmins };
