import React, { useState } from 'react';
import { FormContainer, FormGroup, Label, Input, Button, FormWrapper, Title } from './RegisterStyles'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../API/apiService';



function RegistroAdmin() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome: '',
        username: '',
        senha: '',
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
            const response = await registerUser(form);
            console.log('Resposta do Registro:', response);
            navigate('/');
        } catch (error) {
            console.error('Erro ao registrar:', error);
        }
    };

    return (
        <FormWrapper>
            <FormContainer onSubmit={handleSubmit}>
                <Title>Registro de Admin</Title>
                <FormGroup>
                    <Label>
                        <Input
                            name="nome"
                            type="text"
                            placeholder="Nome Completo"
                            value={form.nome}
                            onChange={handleChange}
                        />
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        <Input
                            name="username"
                            type="text"
                            placeholder="username"
                            value={form.username}
                            onChange={handleChange}
                        />
                    </Label>
                </FormGroup>
                <FormGroup>
                    <Label>
                        <Input
                            name="senha"
                            type="password"
                            placeholder="Senha"
                            value={form.senha}
                            onChange={handleChange}
                        />
                    </Label>
                </FormGroup>
                <Button to='/' type="submit">Registrar</Button>
            </FormContainer>
        </FormWrapper>
    );
}

export default RegistroAdmin;