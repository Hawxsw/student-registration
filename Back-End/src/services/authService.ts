import jwt from 'jsonwebtoken';

const secretKey = 'yourSecretKey';

function generateToken(usuarioId: any) {
    return jwt.sign({ id: usuarioId }, secretKey, { expiresIn: '1h' });
}