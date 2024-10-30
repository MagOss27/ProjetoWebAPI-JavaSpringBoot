import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import './Usuario.css';
import FotoUser from '../components/FotoUser/FotoUser';
import lixo from '../assets/lixo.png'
import img_pedido from '../assets/img-pedido.png'
import Modal from '../components/Modal/Modal';

const Usuario = ({ theme }) => {
    const [usuario, setUsuario] = useState(null);
    const [erro, setErro] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [pedidos, setPedidos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Estado para mensagens de erro
    const [successMessage, setSuccessMessage] = useState(''); // Estado para mensagens de sucesso
    const navigate = useNavigate();

    useEffect(() => {
        // Busca os dados do usuário e também os pedidos do localStorage
        const userID = localStorage.getItem('userID');
        if (userID) {
            axios.get(`http://localhost:8080/clientes/${userID}`)
                .then((response) => {
                    const { nome, email, senha } = response.data;
                    setNome(nome);
                    setEmail(email);
                    setSenha(senha);
                })
                .catch((error) => {
                    console.error('Erro ao buscar dados do usuário:', error);
                    setErrorMessage('Erro ao buscar dados do usuário.');
                });
        }

        // Carrega os pedidos do localStorage
        const pedidosSalvos = JSON.parse(localStorage.getItem('pedidos')) || [];
        setPedidos(pedidosSalvos);
    }, []);


    // Função para editar os dados do usuário
    const editarUsuario = () => {
        const userID = localStorage.getItem('userID');
        if (userID) {
            const usuarioAtualizado = { nome, email, senha };
            axios.put(`http://localhost:8080/clientes/${userID}`, usuarioAtualizado)
                .then(() => {
                    setSuccessMessage('Usuário atualizado com sucesso!');
                    setErrorMessage(''); // Limpa mensagem de erro
                })
                .catch((error) => {
                    console.error('Erro ao atualizar dados do usuário:', error);
                    setErrorMessage('Erro ao atualizar dados do usuário.');
                    setSuccessMessage(''); // Limpa mensagem de sucesso
                });
        }
    };

    // Função para excluir o usuário
    const excluirUsuario = () => {
        const userID = localStorage.getItem('userID');
        if (userID) {
            axios.delete(`http://localhost:8080/clientes/${userID}`)
                .then(() => {
                    localStorage.removeItem('userID'); // Remove ID do usuário do localStorage
                    localStorage.removeItem('isLoggedIn'); // Remove o estado de login
                    setSuccessMessage('Usuário excluído com sucesso!');
                    alert("Sua conta foi Excluída com Sucesso!")
                    navigate('/'); // Redireciona para a tela Home
                })
                .catch((error) => {
                    console.error('Erro ao excluir usuário:', error);
                    setErrorMessage('Erro ao excluir usuário.');
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

        setPedidos([]); // Limpa o estado de pedidos
        localStorage.removeItem('pedidos'); // Remove os pedidos do localStorage

        if (usuario) {
            const updatedUser = { ...usuario, pedidos: [] };
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const userIndex = usuarios.findIndex(user => user.email === usuario.email);
            usuarios[userIndex] = updatedUser;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }

        setModalTitle('Sucesso');
        setModalMessage('Pedido finalizado com sucesso!');
        setModalOpen(true);
    };

    const handleRemovePedido = (index) => {
        const updatedPedidos = [...pedidos];
        updatedPedidos.splice(index, 1);
        setPedidos(updatedPedidos);

        if (usuario) {
            const updatedUser = { ...usuario, pedidos: updatedPedidos };
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const userIndex = usuarios.findIndex(user => user.email === usuario.email);
            usuarios[userIndex] = updatedUser;
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }
    }

    return (
        <div className='div-user'>
            <div className='principal-user-div'>
                <div className='p-esquerda'>
                    <div className="foto-usuario">
                        <div className="foto">
                            {/* Componente para a foto do usuário */}
                            <FotoUser />
                        </div>
                    </div>
                    <div className="nome-usuario">
                        <p>Olá {nome ? nome : 'Usuário'}</p>
                    </div>
                    <div className="input-usuario">
                        <p>NOME</p>
                        <input
                            className='input-css'
                            type='text'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <p>E-MAIL</p>
                        <input
                            className='input-css'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>SENHA</p>
                        <input
                            className='input-css'
                            type='password'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <div className="button-usuario">
                        <button
                            className='button-edituser-css'
                            onClick={editarUsuario} // Chama função de editar
                        >
                            EDITAR USER
                        </button>
                        <button
                            className='button-excluiruser-css'
                            onClick={excluirUsuario} // Chama função de excluir
                        >
                            EXCLUIR USER
                        </button>
                    </div>
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
                <div className='p-direita'>
                    <p className='titulo-pedidos'>MEUS PEDIDOS</p>
                    <div className='pedidos-usuario'>
                        {/* Aqui você pode listar os pedidos do usuário, se houver */}

                        {pedidos.length > 0 ? (
                            pedidos.map((pedido, index) => (
                                <div key={index} className='pedido-card'>
                                    <div className="pedido-imagem">
                                        <img src={img_pedido} className='pedido-icon' />
                                    </div>
                                    <div className='pedido-nome'>
                                        <p>{pedido.quantidade} {pedido.nome}(s)</p>
                                    </div>
                                    <div className='pedido-gap'></div>
                                    <div className='pedido-btn'>
                                        <button onClick={() => handleRemovePedido(index)}><img src={lixo} className='lixo-icon' /></button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='zero-pedidos'>{erro ? erro : 'Adicione ítens ao seu pedido.'}</p>
                        )}
                    </div>
                    <button onClick={finalizarPedido} className='button-edituser-css-dois'>FINALIZAR PEDIDO</button>
                    <div>

                        <Modal
                            isOpen={modalOpen}
                            onClose={() => setModalOpen(false)}
                            title={modalTitle}
                            message={modalMessage}
                        />
                        {/* <p>Você ainda não fez nenhum pedido.</p> */}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Usuario;