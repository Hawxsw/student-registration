import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const secretKey = 'your_secret_key';

export function generateToken(user: any): string {
    return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
}

export function verifyToken(token: string): any {
    return jwt.verify(token, secretKey);
}

export function hashPassword(password: string): string {
    return bcrypt.hashSync(password, 8);
}

export function comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
}