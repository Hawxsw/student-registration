import express from 'express';
import * as studentController from '../controllers/studentController';

const router = express.Router();

router.post('/student', studentController.createStudent);
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

export default router;
