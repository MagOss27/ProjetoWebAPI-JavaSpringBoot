import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import light_logo_red from '../assets/logo-redonda-light.png';
import dark_logo_red from '../assets/logo-redonda-dark.png';

const Login = ({ theme }) => {
    const [email, setEmail] = useState(''); // Estado para armazenar o email
    const [senha, setSenha] = useState(''); // Estado para armazenar a senha
    const [erro, setErro] = useState(''); // Estado para armazenar erros
    const navigate = useNavigate(); // Hook para redirecionamento

    const handleLogin = async (e) => {
        e.preventDefault(); // Evita o reload da página

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
                        <p>E-MAIL</p>
                        <input
                            type='text'
                            className='input-login'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Captura o valor do email
                        />
                        <p>SENHA</p>
                        <input
                            type='password'
                            className='input-login'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} // Captura o valor da senha
                        />
                    </div>
                </div>

                {erro && <p className="error-message">{erro}</p>} {/* Exibe a mensagem de erro */}

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
