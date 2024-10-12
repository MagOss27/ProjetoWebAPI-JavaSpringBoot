import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Usuario.css';
import FotoUser from '../components/FotoUser/FotoUser';

const Usuario = ({ theme, setTheme }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Função para buscar os dados do usuário logado
    useEffect(() => {
        const userID = localStorage.getItem('userID');
        if (userID) {
            // Faz uma requisição GET para pegar os dados do usuário
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
                .then((response) => {
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

    const excluirUsuario = () => {
        const userID = localStorage.getItem('userID');
        if (userID) {
            axios.delete(`http://localhost:8080/clientes/${userID}`)
                .then(() => {
                    localStorage.removeItem('userID'); // Remove ID do usuário do localStorage
                    // Redirecionar ou exibir mensagem de sucesso
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
                            {/* Componente de foto do usuário */}
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
                            onClick={editarUsuario} // Adiciona função para editar
                        >
                            EDITAR USER
                        </button>
                        <button 
                            className='button-excluiruser-css' 
                            onClick={excluirUsuario} // Adiciona função para excluir
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
                        {/* Lista de pedidos do usuário */}
                        <p>Você ainda não fez nenhum pedido.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Usuario;
