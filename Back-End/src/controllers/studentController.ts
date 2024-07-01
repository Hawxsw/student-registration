import { Request, Response } from 'express';
import supabase from '../config/supabase';
import { UploadedFile } from 'express-fileupload';
import prisma from '../prisma/prisma';

export async function registerStudent(req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, birthDate, document, email, about } = req.body;
    try {
        const student = await prisma.student.create({
            data: {
                firstName,
                lastName,
                birthDate: new Date(birthDate),
                document,
                email,
                about,
            },
        });
        return res.json({ student });
    } catch (error) {
        console.error('Erro ao registrar estudante:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

export async function getAllStudents(req: Request, res: Response): Promise<Response> {
    try {
        const students = await prisma.student.findMany();
        return res.json({ students });
    } catch (error) {
        console.error('Erro ao obter estudantes:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

export async function uploadProfilePicture(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (!req.files || !req.files.file) {
        return res.status(400).json({ error: 'Nenhum arquivo enviado' });
    }

    const file = Array.isArray(req.files.file) ? req.files.file[0] : req.files.file as UploadedFile;

    try {
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) {
            console.error('Erro na sessão do Supabase:', sessionError);
            return res.status(401).json({ error: 'Não autorizado' });
        }

        if (!session) {
            console.error('Sessão não encontrada.');
            return res.status(401).json({ error: 'Não autorizado' });
        }

        const user = session.user;
        if (!user || user.id !== id) {
            console.error('Usuário não autorizado ou ID não corresponde:', user, id);
            return res.status(403).json({ error: 'Não autorizado' });
        }

        const { data: uploadData, error: uploadError } = await supabase.storage
            .from('profile-pictures')
            .upload(`students/${id}/${file.name}`, file.data, {
                cacheControl: '3600',
                upsert: false,
            });

        if (uploadError) {
            console.error('Erro no upload da imagem:', uploadError.message);
            return res.status(400).json({ error: uploadError.message });
        }

        const { data: { publicUrl } } = supabase.storage.from('profile-pictures').getPublicUrl(`students/${id}/${file.name}`);
        const { data: student, error: updateError } = await supabase
            .from('students')
            .update({ profile_url: publicUrl })
            .eq('id', id)
            .single();

        if (updateError) {
            console.error('Erro ao atualizar o perfil do aluno:', updateError.message);
            return res.status(400).json({ error: updateError.message });
        }

        return res.json({ profileUrl: publicUrl, student });
    } catch (error: any) {
        console.error('Erro ao enviar foto de perfil:', error.message);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}