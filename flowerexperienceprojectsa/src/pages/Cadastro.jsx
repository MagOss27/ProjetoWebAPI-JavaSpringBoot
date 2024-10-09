import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import axios from 'axios';
import light_logo_red from '../assets/logo-redonda-light.png';
import dark_logo_red from '../assets/logo-redonda-dark.png';

const Cadastro = ({ theme, setTheme }) => {
    // Estados para armazenar os dados do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleCadastro = async () => {
        if (senha !== confirmarSenha) {
            setErrorMessage('As senhas não coincidem');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/clientes', {
                nome: nome,
                email: email,
                senha: senha,
            });

            if (response.status === 201) {
                alert('Cadastro realizado com sucesso!');
                // Você pode redirecionar o usuário para a página de login, se desejar
                window.location.href = '/login';
            }
        } catch (error) {
            console.error('Erro ao realizar cadastro:', error);
            setErrorMessage('Erro ao realizar cadastro. Tente novamente.');
        }
    };

    return (
        <div className='cadastro'>
            <div className='container-cadastro'>
                <div className='cadastro-logo'>
                    <img src={theme === 'dark' ? light_logo_red : dark_logo_red} alt='' className='logo-red-css-cad' />
                </div>

                <div className='cadastro-text'>
                    <p>ASSINE E ACOMPANHE SUA ASSINATURA EM UM SÓ LUGAR!</p>
                </div>

                <div className='cadastro-container-inputs'>
                    <div className='cadastro-inputs'>
                        <p>NOME</p>
                        <input
                            type='text'
                            className='input-cadastro'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <p>E-MAIL</p>
                        <input
                            type='email'
                            className='input-cadastro'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>SENHA</p>
                        <input
                            type='password'
                            className='input-cadastro'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <p>CONFIRMAR SENHA</p>
                        <input
                            type='password'
                            className='input-cadastro'
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                        />
                    </div>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className='cadastro-button'>
                    <button className='btn-cadastro' onClick={handleCadastro}>CADASTRAR</button>
                    <p>Já possui uma conta?</p><Link to='/login' className='cad-btn'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
