import express from 'express';
import * as adminController from '../controllers/adminController';

const router = express.Router();

router.post('/login', adminController.loginAdmin);
router.post('/registro', adminController.criarAdmin);
router.get('/admins', adminController.listarAdminsController);
router.delete('/admin/:id', adminController.deletarAdminController);
router.put('/admin/:id', adminController.atualizarAdminController);


export default router;
