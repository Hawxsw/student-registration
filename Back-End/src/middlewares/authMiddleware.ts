import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    user?: {
        usuarioId?: string;
        username?: string;
        emailUser?: string;
        role?: string;
    };
}

const secretKey = 'yourSecretKey';

export function checkToken(req: CustomRequest, res: Response, next: NextFunction) {
    const token = req.headers['authorization']?.split(" ")[1];

    if (!token) {
        return res.status(401).send({ erro: 'Token não fornecido.' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({ erro: 'Token inválido ou expirado.' });
        }

        const decodedToken = decoded as any;

        if (decodedToken) {
            if (decodedToken.role !== "admin") {
                return res.status(403).send({ erro: 'Acesso negado. Permissão insuficiente.' });
            }

            req.user = {
                usuarioId: decodedToken.id,
                username: decodedToken.nome,
                emailUser: decodedToken.email,
                role: decodedToken.role
            };

            next();
        } else {
            return res.status(401).send({ erro: 'Não foi possível decodificar o token.' });
        }
    });
}
