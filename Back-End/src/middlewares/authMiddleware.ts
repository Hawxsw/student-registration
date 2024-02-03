import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomRequest extends Request {
    usuarioId?: string;
    nomeUsuario?: string;
    emailUsuario?: string;
}

const secretKey = 'suaChaveSecreta';

export function verificarToken(req: CustomRequest, res: Response, next: NextFunction) {
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
            if (decodedToken.role && decodedToken.role !== "admin") {
                return res.status(403).send({ erro: 'Acesso negado. Permissão insuficiente.' });
            }

            req.usuarioId = decodedToken.id;
            req.nomeUsuario = decodedToken.nome;
            req.emailUsuario = decodedToken.email;

            next();
        } else {
            return res.status(401).send({ erro: 'Não foi possível decodificar o token.' });
        }
    });
}
