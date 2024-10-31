import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import light_logo_red from '../assets/logo-redonda-light.png';
import dark_logo_red from '../assets/logo-redonda-dark.png';

const Login = ({ theme }) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('');
    const [erroLogin, setErroLogin] = useState(false);
    const navigate = useNavigate();

    const validarEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };
    const handleLogin = async (e) => {
        e.preventDefault(); // Evita o reload da página
        let hasError = false;

        // Verificação se o campo e-mail está vazio ou inválido
        if (email.trim() === '') {
            setErroEmail('E-mail não pode ser vazio.');
            hasError = true;
        } else if (!validarEmail(email)) {
            setErroEmail('E-mail inválido.');
            hasError = true;
        } else {
            setErroEmail('');
        }

        // Verificação se o campo senha está vazio
        if (senha.trim() === '') {
            setErroSenha('Senha não pode ser vazia.');
            hasError = true;
        } else {
            setErroSenha('');
        }

        if (hasError) return;

        try {
            const response = await axios.post('http://localhost:8080/clientes/login', {
                email: email,
                senha: senha,
            });

            // Verifica a resposta do backend
            if (response.data === "admin") {
                alert('Login como administrador realizado com sucesso!');
                localStorage.setItem('isAdmin', 'true'); // Define o administrador no localStorage
                localStorage.setItem('isLoggedIn', 'true'); // Define o estado de login
                navigate('/Adm'); // Redireciona para a página do admin
            } else if (response.status === 200) {
                localStorage.setItem('isLoggedIn', 'true'); // Define o estado de login
                alert('Login realizado com sucesso!');
                navigate('/Usuario'); // Redireciona para a página do usuário
            }
        } catch (err) {
            console.error('Erro ao realizar login:', err);
            setErro('Email ou senha incorretos!'); // Exibe mensagem de erro em caso de falha
        }
    };

    return (
        <div className='login'>
            <div className='container-login'>
                <div className='login-logo'>
                    <img src={theme === 'dark' ? light_logo_red : dark_logo_red} alt='' className='logo-red-css' />
                </div>

                <div className='login-text'>
                    <p>ENTRE E ACOMPANHE A SUA ASSINATURA EM UM SÓ LUGAR!</p>
                </div>

                <div className='login-container-inputs'>
                    <div className='login-inputs'>
                    <p>E-MAIL{erroLogin && <span className='login-error-message'> * Email ou senha incorretos!</span>}</p>
                        <input
                            type='text'
                            className={`input-login ${erroEmail ? 'input-error' : ''}`}
                            value={email}
                            onChange={(e) => {
                                setErroLogin(false);
                                setEmail(e.target.value);
                            }}
                            placeholder={erroEmail || 'Digite seu e-mail'}
                        />
                        <p>SENHA</p>
                        <input
                            type='password'
                            className={`input-login ${erroSenha ? 'input-error' : ''}`}
                            value={senha}
                            onChange={(e) => {
                                setErroLogin(false);
                                setSenha(e.target.value);
                            }}
                            placeholder={erroSenha || 'Digite sua senha'}
                        />
                    </div>
                </div>

                <div className='login-button'>
                    <button className='btn-login' onClick={handleLogin}>ENTRAR</button> {/* Evento de clique */}
                    <p>Não possui uma conta?</p>
                    <Link to='/cadastro' className='cad-btn'>Cadastre-se</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;