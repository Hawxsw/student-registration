import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    usuarioId?: string;
}

const secretKey = 'suaChaveSecreta';

export function verificarToken(req: CustomRequest, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send({ erro: 'Token não fornecido.' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).send({ erro: 'Token inválido ou expirado.' });
        }

        if (decoded) {
            req.usuarioId = (decoded as any).id;
            next();
        } else {
            return res.status(401).send({ erro: 'Não foi possível decodificar o token.' });
        }
    });
}
