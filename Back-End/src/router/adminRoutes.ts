import express from 'express';
import * as adminController from '../controllers/adminController';

const router = express.Router();

router.post('/registro', adminController.criarAdmin);
router.post('/login', adminController.loginAdmin);

export default router;
