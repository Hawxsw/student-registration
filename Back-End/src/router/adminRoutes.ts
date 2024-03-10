import express from 'express';
import * as adminController from '../controllers/adminController';
import { checkToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/login', adminController.loginAdmin);
router.post('/registro', adminController.createAdmin);
router.post('/register', checkToken, adminController.createAdmin);
router.get('/admins', adminController.listAdminsController);
router.delete('/admin/:id', adminController.deleteAdminController);
router.put('/admin/:id', adminController.updateAdminController);


export default router;
