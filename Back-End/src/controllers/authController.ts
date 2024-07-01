import { Request, Response } from 'express';
import crypto from 'crypto';
import supabase from '../config/supabase';
import { hashPassword } from '../auth/auth';
import prisma from '../prisma/prisma';

export async function forgotPassword(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;
    try {
        const admin = await prisma.admin.findFirst({
            where: { username: email },
        });

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        const token = crypto.randomBytes(20).toString('hex');
        const resetUrl = `http://localhost:3000/reset-password/${token}`;

        const { error } = await supabase.from('emails').insert([
            {
                to: email,
                subject: 'Password Reset',
                text: `Reset your password using this link: ${resetUrl}`,
            }
        ]);

        if (error) {
            return res.status(500).json({ message: 'Failed to send email' });
        }

        await prisma.admin.update({
            where: { id: admin.id },
            data: {
                resetPasswordToken: token,
                resetPasswordExpires: new Date(Date.now() + 3600000), // 1 hour
            },
        });

        return res.json({ message: 'Password reset link sent' });
    } catch (error) {
        console.error('Erro ao enviar email de reset de senha:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

export async function resetPassword(req: Request, res: Response): Promise<Response> {
    const { token, newPassword } = req.body;
    try {
        const admin = await prisma.admin.findFirst({
            where: {
                resetPasswordToken: token,
                resetPasswordExpires: { gt: new Date() },
            },
        });

        if (!admin) {
            return res.status(400).json({ message: 'Token inválido ou expirado' });
        }

        const hashedPassword = await hashPassword(newPassword);

        await prisma.admin.update({
            where: { id: admin.id },
            data: {
                password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpires: null,
            },
        });

        return res.json({ message: 'Senha foi resetada com sucesso' });
    } catch (error) {
        console.error('Erro ao resetar senha:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}