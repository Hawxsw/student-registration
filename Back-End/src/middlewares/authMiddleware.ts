import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../auth/auth';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = verifyToken(token.split(' ')[1]);
        res.locals.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
}