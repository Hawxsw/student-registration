import express from 'express';
import * as adminController from '../controllers/adminController';
import * as studentController from '../controllers/studentController';

const router = express.Router();

router.post('/login', adminController.loginAdmin);
router.post('/registro', adminController.criarAdmin);
router.get('/admins', adminController.listarAdminsController);





export default router;
