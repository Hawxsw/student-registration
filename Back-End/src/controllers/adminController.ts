import { Request, Response } from 'express';
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