import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as adminService from '../services/adminService';
import { generateToken } from '../utils/authService';

export async function createAdmin(req: Request, res: Response) {
    try {
        const { name, username, password } = req.body;
        const admin = await adminService.AdminService.createAdmin({ name, username, password });

        return res.status(201).json(admin);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro ao criar administrador" });
    }
}

export async function loginAdmin(req: Request, res: Response) {
    try {
        const { username, password } = req.body;
        const admin = await adminService.AdminService.searchAdmin(username);
        if (!admin) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        const isValidPassword = await bcrypt.compare(password, admin.passwordHash);
        if (!isValidPassword) {
            return res.status(401).json({ mensagem: "Senha inválida" });
        }

        const token = generateToken(admin.id);

        return res.json({ mensagem: "Login realizado com sucesso!", token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro ao fazer login" });
    }
}

export async function listAdminsController(req: Request, res: Response) {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const filter = req.query.filter || {};

        const admins = await adminService.AdminService.listAdmins({ page, limit, filter });

        res.json(admins);
    } catch (error) {
        console.error("Erro ao listar administradores", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}

export async function deleteAdminController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await adminService.AdminService.deleteAdmin(id);
        return res.status(200).json({ mensagem: "Administrador deletado com sucesso." });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro ao deletar administrador" });
    }
}

export async function updateAdminController(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedAdmin = await adminService.AdminService.updateAdmin(id, updatedData);
        return res.status(200).json(updatedAdmin);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro ao atualizar administrador" });
    }
}
