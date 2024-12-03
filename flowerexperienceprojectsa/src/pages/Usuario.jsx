import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Usuario.css';
import FotoUser from '../components/FotoUser/FotoUser';
import lixo from '../assets/lixo.png';
import img_pedido from '../assets/img-pedido.png';
import Modal from '../components/Modal/Modal';

const Usuario = ({ theme }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [pedidos, setPedidos] = useState([]);
    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const navigate = useNavigate();

    const validarEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    useEffect(() => {
        const userID = localStorage.getItem('userID');
        if (userID) {
            axios.get(`http://localhost:8080/clientes/${userID}`)
                .then((response) => {
                    const { nome, email, senha } = response.data;
                    setNome(nome);
                    setEmail(email);
                    setSenha(senha);
                })
                .catch(() => {
                    setModalTitle('Erro');
                    setModalMessage('Erro ao buscar dados do usuário.');
                    setModalOpen(true);
                });
        }

        const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos')) || [];
        setPedidos(pedidosSalvos);
    }, []);

    useEffect(() => {
        if (nome.trim().length < 3) {
            setErroNome('Nome não pode ser vazio.');
        } else {
            setErroNome('');
        }
    }, [nome]);

    useEffect(() => {
        if (email.trim() === '') {
            setErroEmail('E-mail não pode ser vazio.');
        } else if (!validarEmail(email)) {
            setErroEmail('E-mail inválido.');
        } else {
            setErroEmail('');
        }
    }, [email]);

    useEffect(() => {
        if (senha.length < 8) {
            setErroSenha('Senha não pode ser vazia.');
        } else {
            setErroSenha('');
        }
    }, [senha]);

    const editarUsuario = () => {
        if (erroNome || erroEmail || erroSenha || nome.trim() === '' || email.trim() === '' || senha.trim() === '') {
            setModalTitle('Erro');
            setModalMessage('Corrija os erros antes de salvar.');
            setModalOpen(true);
            return;
        }

        const userID = localStorage.getItem('userID');
        if (userID) {
            const usuarioAtualizado = { nome, email, senha };
            axios.put(`http://localhost:8080/clientes/${userID}`, usuarioAtualizado)
                .then(() => {
                    setModalTitle('Sucesso');
                    setModalMessage('Usuário editado com sucesso!');
                    setModalOpen(true);
                })
                .catch(() => {
                    setModalTitle('Erro');
                    setModalMessage('Erro ao atualizar dados do usuário.');
                    setModalOpen(true);
                });
        }
    };

    const excluirUsuario = () => {
        const userID = localStorage.getItem('userID');
        if (userID) {
            axios.delete(`http://localhost:8080/clientes/${userID}`)
                .then(() => {
                    localStorage.removeItem('userID');
                    localStorage.removeItem('isLoggedIn');
                    setModalTitle('Sucesso');
                    setModalMessage('Usuário excluído com sucesso!');
                    setModalOpen(true);
                    setShouldRedirect(true);
                })
                .catch(() => {
                    setModalTitle('Erro');
                    setModalMessage('Erro ao excluir usuário.');
                    setModalOpen(true);
                });
        }
    };

    const finalizarPedido = () => {
        if (pedidos.length === 0) {
            setModalTitle('Aviso');
            setModalMessage('Não há pedidos adicionados para finalizar.');
            setModalOpen(true);
            return;
        }

        setPedidos([]);
        localStorage.removeItem('pedidos');
        setModalTitle('Sucesso');
        setModalMessage('Pedido finalizado com sucesso!');
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        if (shouldRedirect) {
            navigate('/');
        }
    };

    const handleRemovePedido = (index) => {
        const updatedPedidos = [...pedidos];
        updatedPedidos.splice(index, 1);
        setPedidos(updatedPedidos);
    };

    return (
        <div className='div-user'>
            <div className='principal-user-div'>
                <div className='p-esquerda'>
                    <div className="foto-usuario">
                        <div className="foto">
                            <FotoUser />
                        </div>
                    </div>
                    <div className="nome-usuario">
                        <p>Olá {nome || 'Usuário'}</p>
                    </div>
                    <div className="input-usuario">
                        <p>NOME</p>
                        <input
                            className={`input-css ${erroNome ? 'input-error' : ''}`}
                            type='text'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder={erroNome || 'Digite seu nome'}
                        />
                        <p>E-MAIL</p>
                        <input
                            className={`input-css ${erroEmail ? 'input-error' : ''}`}
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={erroEmail || 'Digite seu e-mail'}
                        />
                        <p>SENHA</p>
                        <input
                            className={`input-css ${erroSenha ? 'input-error' : ''}`}
                            type='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder={erroSenha || 'Digite sua senha'}
                        />
                    </div>
                    <div className="button-usuario">
                        <button
                            className='button-edituser-css'
                            onClick={editarUsuario}
                        >
                            Editar Perfil
                        </button>
                        <button
                            className='button-excluiruser-css'
                            onClick={excluirUsuario}
                        >
                            Excluir Perfil
                        </button>
                    </div>
                </div>
                <div className='p-direita'>
                    <p className='titulo-pedidos'>MEUS PEDIDOS</p>
                    <div className='pedidos-usuario'>
                        {pedidos.length > 0 ? (
                            pedidos.map((pedido, index) => (
                                <div key={index} className='pedido-card'>
                                    <div className="pedido-imagem">
                                        <img src={img_pedido} className='pedido-icon' alt='Pedido' />
                                    </div>
                                    <div className='pedido-nome'>
                                        <p>{pedido.quantidade} {pedido.nome}(s)</p>
                                    </div>
                                    <div className='pedido-gap'></div>
                                    <div className='pedido-btn'>
                                        <button onClick={() => handleRemovePedido(index)}>
                                            <img src={lixo} className='lixo-icon' alt='Excluir' />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='zero-pedidos'>Adicione ítens ao seu pedido.</p>
                        )}
                    </div>
                    <button onClick={finalizarPedido} className='button-edituser-css-dois'>
                        FINALIZAR PEDIDO
                    </button>
                    <Modal
                        isOpen={modalOpen}
                        onClose={handleCloseModal}
                        title={modalTitle}
                        message={modalMessage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Usuario;
