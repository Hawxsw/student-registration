import jwt from 'jsonwebtoken';

const secretKey = 'yourSecretKey';

export function generateToken(usuarioId: any) {
    return jwt.sign({ id: usuarioId }, secretKey, { expiresIn: '1h' });
}