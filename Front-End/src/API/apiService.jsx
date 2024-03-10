const BASE_URL = 'http://localhost:3000'
const token = localStorage.getItem('token');


//Admins

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

export const registerAdmin = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/register`, {
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

export const listarAdmins = async (pagina = 1, limite = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/admins`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Falha ao listar administradores com status ' + response.status);
        }

        return await response.json();
    } catch (error) {
        console.error("Erro ao listar administradores:", error.message);
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

export const deletarAdmin = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/admin/admin/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Erro no servidor: ${response.status}`);
        }

        const text = await response.text();
        return text ? JSON.parse(text) : {};
    } catch (error) {
        console.error('Falha ao deletar admin:', error);
        throw error;
    }
}

//Estudantes

export const AlunoRegistro = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/student/student`, {
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

export const deletarAluno = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/student/students/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error(`Erro no servidor: ${response.status}`);
        }

        const text = await response.text();
        return text ? JSON.parse(text) : {};
    } catch (error) {
        console.error('Falha ao deletar aluno:', error);
        throw error;
    }
}


export const listarAlunos = async (pagina = 1, limite = 10) => {
    try {
        const response = await fetch(`${BASE_URL}/student/students`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Falha ao listar alunos com status ' + response.status);
        }

        return await response.json();
    } catch (error) {
        console.error("Erro ao listar alunos:", error.message);
        throw error;
    }
};