import { Request, Response } from 'express';
import { hashPassword, comparePassword, generateToken } from '../auth/auth';
import prisma from '../prisma/prisma';


export async function registerAdmin(req: Request, res: Response): Promise<Response> {
    const { name, username, senha, permissions } = req.body;
    try {
        const hashedPassword = hashPassword(senha); // Certifique-se de implementar a função hashPassword
        const admin = await prisma.admin.create({
            data: {
                name,
                username,
                password: hashedPassword,
                permissions,
            },
        });
        return res.json({ admin });
    } catch (error) {
        console.error('Erro ao registrar admin:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

export async function loginAdmin(req: Request, res: Response): Promise<Response> {
    const { username, senha } = req.body;
    try {
        const admin = await prisma.admin.findUnique({
            where: { username },
        });

        if (!admin || !comparePassword(senha, admin.password)) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        }

        const token = generateToken(admin);
        return res.json({ token });
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

export async function getAllAdmins(req: Request, res: Response): Promise<Response> {
    try {
        const admins = await prisma.admin.findMany();
        return res.json({ admins });
    } catch (error) {
        console.error('Erro ao obter admins:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}