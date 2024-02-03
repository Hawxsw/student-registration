import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as adminService from '../services/adminService';
import { Admin } from '../Interfaces/Interdaces';
import { generateToken } from '../utils/authService'

export async function criarAdmin(req: Request, res: Response) {
    try {
        const { nome, username, senha }: Admin = req.body;
        const admin = await adminService.criarAdmin({ nome, username, senha });

        return res.status(201).json(admin);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mesagem: "Erro ao criar administrador" });
    }

}

export async function loginAdmin(req: Request, res: Response) {
    try {
        const { username, senha } = req.body;
        const admin = await adminService.searchAdmin(username);
        if (!admin) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        const senhaValida = await bcrypt.compare(senha, admin.senhaHash);
        if (!senhaValida) {
            return res.status(401).json({ mensagem: "Senha inválida" });
        }


        const token = generateToken(admin.id);

        return res.json({ mensagem: "Login realizado com sucesso!", token: token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro ao fazer login" });
    }
}


export async function listarAdminsController(req: Request, res: Response) {
    try {
        const pagina = parseInt(req.query.pagina as string) || 1;
        const limite = parseInt(req.query.limite as string) || 10;
        const filtro = req.query.filtro || {};

        const admins = await adminService.listarAdmins({ pagina, limite, filtro });

        res.json(admins);
    } catch (error) {
        console.error("Erro ao listar administradores", error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
}