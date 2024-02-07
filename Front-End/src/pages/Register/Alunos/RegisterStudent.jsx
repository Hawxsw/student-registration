import React, { useState } from 'react';
import { FormContainer, FormGroup, Label, Input, Button, FormWrapper, Title, Row } from './RegisterStyle'
import { AlunoRegistro } from '../../../API/apiService';



function RegistroAluno({ onClose, onAlunoRegistrado }) {
    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        dataNascimento: '',
        cpfOuRg: '',
        email: '',
        sobre: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AlunoRegistro(form);
            console.log('Registro bem-sucedido:', response);
            if (onAlunoRegistrado) {
                onAlunoRegistrado(response)
            }
            onClose();
        } catch (error) {
            console.error('Erro no registro:', error);
        }
    };



    return (
        <FormWrapper>
            <FormContainer onSubmit={handleSubmit}>
                <Title>Registro de Aluno</Title>
                <Row>
                    <FormGroup>
                        <Label>Nome</Label>
                        <Input
                            name="nome"
                            type="text"
                            placeholder="Nome Completo"
                            value={form.nome}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Sobrenome</Label>
                        <Input
                            name="sobrenome"
                            type="text"
                            placeholder="Sobrenome"
                            value={form.sobrenome}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label>Data de Nascimento</Label>
                        <Input
                            name="dataNascimento"
                            type="date"
                            value={form.dataNascimento}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>CPF ou RG</Label>
                        <Input
                            name="cpfOuRg"
                            type="text"
                            placeholder="CPF ou RG"
                            value={form.cpfOuRg}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Sobre</Label>
                        <Input
                            name="sobre"
                            type="text"
                            placeholder="Sobre o Aluno"
                            value={form.sobre}
                            onChange={handleChange}
                        />
                    </FormGroup>
                </Row>
                <Button type="submit">Registrar</Button>
            </FormContainer>
        </FormWrapper>
    );
}

export default RegistroAluno;