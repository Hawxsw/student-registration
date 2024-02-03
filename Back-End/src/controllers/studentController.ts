import { Request, Response } from 'express';
import { StudentService } from '../services/studentService';

export const createStudent = async (req: Request, res: Response) => {
    try {
        const newStudent = await StudentService.createStudent(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        console.error("Erro ao criar estudante: ", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

export const getAllStudents = async (req: Request, res: Response) => {
    try {
        const students = await StudentService.findAllStudents();
        res.status(200).json(students);
    } catch (error) {
        console.error("Erro ao buscar estudantes: ", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

export const getStudentById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const student = await StudentService.findStudentById(Number(id));
        if (student) {
            res.status(200).json(student);
        } else {
            res.status(404).json({ message: "Estudante não encontrado" });
        }
    } catch (error) {
        console.error("Erro ao buscar estudante: ", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

export const updateStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedStudent = await StudentService.updateStudent(Number(id), req.body);
        res.status(200).json(updatedStudent);
    } catch (error) {
        console.error("Erro ao atualizar estudante: ", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

export const deleteStudent = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await StudentService.deleteStudent(Number(id));
        res.status(204).send();
    } catch (error) {
        console.error("Erro ao deletar estudante: ", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};
