import bcrypt from 'bcrypt';
import { prisma } from '../prisma/prismaClient';
import { Admin } from '../Interfaces/adminInterdace'

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