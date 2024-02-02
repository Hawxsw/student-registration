const BASE_URL = 'http://localhost:3000'

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/registro`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Falha no registro com status ' + response.status);
        }

        const text = await response.text();
        try {
            const data = JSON.parse(text);
            return data;
        } catch (err) {
            if (text) {
                throw new Error('A resposta não é um JSON válido: ' + text);
            } else {
                return 'Registro bem-sucedido, mas sem dados retornados';
            }
        }
    } catch (error) {
        console.error("Erro no registro:", error.message);
        throw error;
    }
};


export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Falha no login');
        }

        return await response.json();
    } catch (error) {
        console.error("Erro no login:", error);
        throw error;
    }
};