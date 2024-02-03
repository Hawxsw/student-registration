import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../API/apiService';
import { FormContainer, FormGroup, Label, Input, Button, FormWrapper, RegistroLink, LinkContainer } from './LoginStyles';

function Login() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: '',
        senha: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await loginUser(credentials);
            console.log(data);
            navigate('/dashboard')
        } catch (error) {
            console.error("Erro ao fazer login:", error.message);
        }
    };

    return (
        <FormWrapper>
            <FormContainer onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Usuário:</Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="senha">Senha:</Label>
                    <Input
                        type="password"
                        id="senha"
                        name="senha"
                        value={credentials.senha}
                        onChange={handleChange}
                    />
                </FormGroup>
                <Button type="submit">Entrar</Button>
                <LinkContainer>
                    <RegistroLink to="/registro-admin">Registrar</RegistroLink>
                </LinkContainer>
            </FormContainer>
        </FormWrapper>
    );
}

export default Login;
