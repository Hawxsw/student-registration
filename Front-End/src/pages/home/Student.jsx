import React, { useState, useEffect } from 'react';
import { FiPlus, FiFilter } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

import Modal from '../Modal/Modal'
import RegistroAluno from '../Register/Alunos/RegisterStudent'
import { BotaoIconeFiltro, Container, InputFiltro, BotaoAdicionar, FiltroContainer, Tabela, FiltroWrapper, IconeFiltro, SeletorFiltro, InputFiltroEstilizado } from './styles/StudentStyle';
import { listarAlunos, deletarAluno } from './../../API/apiService';


const ListaAlunos = () => {
    const [alunos, setAlunos] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [tipoFiltro, setTipoFiltro] = useState('nome');
    const [mostrarFiltro, setMostrarFiltro] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);

    const fetchAlunos = async () => {
        try {
            setCarregando(true);
            const dados = await listarAlunos();
            console.log(dados);
            setAlunos(dados);
            setErro(null);
        } catch (error) {
            setErro('Falha ao buscar alunos.');
            console.error(error);
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        fetchAlunos();
    }, []);

    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };

    const alunosFiltrados = alunos.filter(aluno => {
        if (!filtro) return true;

        if (!aluno || typeof aluno[tipoFiltro] === 'undefined') return false;

        const valorAluno = aluno[tipoFiltro].toString().toLowerCase();
        return valorAluno.includes(filtro.toLowerCase());
    });




    const onAlunoRegistrado = (novoAluno) => {
        if (novoAluno && novoAluno.id) {
            setAlunos([...alunos, novoAluno]);
        } else {
            console.error('Aluno novo sem ID:', novoAluno);
        }
    };


    const handleDelete = async (id) => {
        await deletarAluno(id);
        setAlunos(alunos.filter(aluno => aluno.id !== id));
    };

    console.log("Alunos Filtrados:", alunosFiltrados);


    return (
        <Container>
            {erro && <p>Erro: {erro}</p>}
            {carregando ? (
                <p>Carregando alunos...</p>
            ) : (
                <>
                    <FiltroContainer>
                        <BotaoAdicionar onClick={() => setModalAberto(true)}>
                            <FiPlus />
                        </BotaoAdicionar>
                        <BotaoIconeFiltro>
                            <IconeFiltro onClick={() => setMostrarFiltro(!mostrarFiltro)} />
                        </BotaoIconeFiltro>
                        {mostrarFiltro && (
                            <FiltroWrapper>
                                <SeletorFiltro
                                    value={tipoFiltro}
                                    onChange={(e) => setTipoFiltro(e.target.value)}
                                >
                                    <option value="nome">Nome</option>
                                    <option value="dataNascimento">Data de Nascimento</option>
                                    <option value="cpfOuRg">CPF/RG</option>
                                    <option value="email">Email</option>
                                </SeletorFiltro>
                                <InputFiltro
                                    type="text"
                                    placeholder="Digite para filtrar..."
                                    value={filtro}
                                    onChange={handleFiltroChange}
                                />
                            </FiltroWrapper>
                        )}
                    </FiltroContainer>

                    <Tabela>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Data de Nascimento</th>
                                <th>CPF/RG</th>
                                <th>Email</th>
                                <th>Sobre</th>
                                <th>Data de Criação</th>
                                <th>Data de Edição</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunosFiltrados.map(aluno => (
                                <tr key={aluno?.id}>
                                    <td>{`${aluno?.nome} ${aluno?.sobrenome}`}</td>
                                    <td>{new Date(aluno?.dataNascimento).toLocaleDateString()}</td>
                                    <td>{aluno?.cpfOuRg}</td>
                                    <td>{aluno?.email}</td>
                                    <td>{aluno?.sobre}</td>
                                    <td>{new Date(aluno?.dataCriacao).toLocaleDateString()}</td>
                                    <td>{new Date(aluno?.dataEdicao).toLocaleDateString()}</td>
                                    <td>
                                        <button style={{ border: 'none', cursor: "pointer", background: 'none', padding: 0, outline: 'none' }} onClick={() => handleDelete(aluno?.id)}>
                                            <MdDelete style={{ color: 'red', fontSize: '24px' }} />
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </Tabela>
                </>
            )}
            <Modal isOpen={modalAberto} onClose={() => setModalAberto(false)}>
                <RegistroAluno onClose={() => setModalAberto(false)} onAlunoRegistrado={onAlunoRegistrado} />
            </Modal>


        </Container>
    );
};

export default ListaAlunos;
