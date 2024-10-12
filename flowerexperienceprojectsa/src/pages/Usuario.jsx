import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Usuario.css';
import FotoUser from '../components/FotoUser/FotoUser';

const Usuario = ({ theme }) => {
    const [nome, setNome] = useState(''); // Estado para armazenar o nome do usuário
    const [email, setEmail] = useState(''); // Estado para armazenar o email do usuário
    const [senha, setSenha] = useState(''); // Estado para armazenar a senha do usuário
    const [errorMessage, setErrorMessage] = useState(''); // Estado para mensagens de erro
    const [successMessage, setSuccessMessage] = useState(''); // Estado para mensagens de sucesso

    // Função para buscar os dados do usuário logado ao carregar a página
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
                .catch((error) => {
                    console.error('Erro ao buscar dados do usuário:', error);
                    setErrorMessage('Erro ao buscar dados do usuário.');
                });
        }
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
                    setSuccessMessage('Usuário excluído com sucesso!');
                })
                .catch((error) => {
                    console.error('Erro ao excluir usuário:', error);
                    setErrorMessage('Erro ao excluir usuário.');
                });
        }
    };

    return (
        <div className='div-user'>
            <div className='principal-user-div'>
                <div className='p-esquerda'>
                    <div className="foto-usuario">
                        <div className="foto">
                            {/* Componente para a foto do usuário */}
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
                        <p>Você ainda não fez nenhum pedido.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Usuario;
