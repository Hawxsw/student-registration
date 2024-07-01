import { Router } from 'express';
import { registerAdmin, loginAdmin, getAllAdmins } from '../controllers/adminController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/', authMiddleware, getAllAdmins);

export default router