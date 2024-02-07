import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

import Modal from '../Modal/Modal'
import RegistroAdmin from '../Register/registerAdmin/adminRegister'
import { BotaoIconeFiltro, Container, InputFiltro, BotaoAdicionar, FiltroContainer, Tabela, FiltroWrapper, IconeFiltro, SeletorFiltro, InputFiltroEstilizado } from './styles/StudentStyle';
import { listarAdmins, deletarAdmin } from './../../API/apiService';


const ListaAdmin = () => {
    const [admins, setAdmins] = useState([]);
    const [filtro, setFiltro] = useState('');
    const [tipoFiltro, setTipoFiltro] = useState('nome');
    const [mostrarFiltro, setMostrarFiltro] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);
    const [modalAberto, setModalAberto] = useState(false);

    const fetchAdmins = async () => {
        try {
            setCarregando(true);
            const dados = await listarAdmins();
            console.log(dados);
            setAdmins(dados);
            setErro(null);
        } catch (error) {
            setErro('Falha ao buscar Admins.');
            console.error(error);
        } finally {
            setCarregando(false);
        }
    };

    useEffect(() => {
        fetchAdmins();
    }, []);

    const handleFiltroChange = (e) => {
        setFiltro(e.target.value);
    };

    const adminsFiltrados = admins.filter(admin => {
        if (!filtro) return true;

        if (!admin || typeof admin[tipoFiltro] === 'undefined') return false;

        const valorAdmin = admin[tipoFiltro].toString().toLowerCase();
        return valorAdmin.includes(filtro.toLowerCase());
    });




    const onAdminRegistrado = (novoAdmin) => {
        if (novoAdmin && novoAdmin.id) {
            setAdmins([...admins, novoAdmin]);
        } else {
            console.error('admin novo sem ID:', novoAdmin);
        }
    };


    const handleDelete = async (id) => {
        await deletarAdmin(id);
        setAdmins(admins.filter(admin => admin.id !== id));
    };

    console.log("Admins Filtrados:", adminsFiltrados);


    return (
        <Container>
            {erro && <p>Erro: {erro}</p>}
            {carregando ? (
                <p>Carregando admins...</p>
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
                                    <option value="dataNascimento">Username</option>
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
                                <th>Username</th>
                                <th>Data de Criação</th>
                                <th>Data de Edição</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminsFiltrados.map(admin => (
                                <tr key={admin?.id}>
                                    <td>{`${admin?.nome}`}</td>
                                    <td>{admin?.username}</td>
                                    <td>{new Date(admin?.dataCriacao).toLocaleDateString()}</td>
                                    <td>{new Date(admin?.dataEdicao).toLocaleDateString()}</td>
                                    <td>
                                        <button style={{ border: 'none', cursor: "pointer", background: 'none', padding: 0, outline: 'none' }} onClick={() => handleDelete(admin?.id)}>
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
                <RegistroAdmin onClose={() => setModalAberto(false)} onAdminRegistrado={onAdminRegistrado} />
            </Modal>


        </Container>
    );
};

export default ListaAdmin;
