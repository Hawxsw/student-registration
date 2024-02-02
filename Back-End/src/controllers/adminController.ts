import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import * as adminService from '../services/adminService';
import { Admin } from '../Interfaces/adminInterdace';

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


        const token = jwt.sign({ id: admin.id }, 'chave-secreta', { expiresIn: '1h' });

        return res.json({ mensagem: "Login realizado com sucesso!", token: token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: "Erro ao fazer login" });
    }
}