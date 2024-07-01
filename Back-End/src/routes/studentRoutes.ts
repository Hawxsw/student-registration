import { Router } from 'express';
import { registerStudent, getAllStudents, uploadProfilePicture } from '../controllers/studentController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/register', authMiddleware, registerStudent);
router.post('/upload/:id', authMiddleware, uploadProfilePicture);
router.get('/', authMiddleware, getAllStudents);

export default router;
