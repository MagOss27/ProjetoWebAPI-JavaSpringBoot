import React, { useState, useEffect } from 'react';
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
    const [touched, setTouched] = useState({
        email: false,
        senha: false,
    });
    const navigate = useNavigate();

    const validarEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    // useEffect para validar os campos
    useEffect(() => {
        let hasError = false;

        // Validação de e-mail
        if (touched.email) {
            if (email.trim() === '') {
                setErroEmail('E-mail não pode ser vazio.');
                hasError = true;
            } else if (!validarEmail(email)) {
                setErroEmail('E-mail inválido.');
                hasError = true;
            } else {
                setErroEmail('');
            }
        }

        // Validação de senha
        if (touched.senha) {
            if (senha.trim() === '') {
                setErroSenha('Senha não pode ser vazia.');
                hasError = true;
            } else if (senha.length < 8) { // Verifica se a senha tem pelo menos 8 dígitos
                setErroSenha('A senha deve ter pelo menos 8 dígitos.');
                hasError = true;
            } else {
                setErroSenha('');
            }
        }

        // Se não houver erro, limpa a mensagem de erro de login
        if (!hasError) {
            setErroLogin(false);
        }
    }, [email, senha, touched]); // Dependências do useEffect

    const handleLogin = async (e) => {
        e.preventDefault();
        setTouched({ email: true, senha: true }); // Marca os campos como tocados

        // // Validação antes de prosseguir
        // if (erroEmail || erroSenha || senha.length < 8) {
        //     return; // Não prosseguir se houver erro
        // }

        try {
            const response = await axios.post('http://localhost:8080/clientes/login', {
                email: email,
                senha: senha,
            });

            if (response.data === "admin") {
                localStorage.setItem('isAdmin', 'true');
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/Adm');
            } else if (response.status === 200) {
                localStorage.setItem('isLoggedIn', 'true');
                navigate('/Usuario');
            }
        } catch (err) {
            console.error('Erro ao realizar login:', err);
            setErroLogin(true); // Define erro de login se a chamada falhar
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
                                setEmail(e.target.value);
                                setErroLogin(false); // Reseta erro de login ao mudar o e-mail
                            }}
                            onBlur={() => setTouched({ ...touched, email: true })}
                            placeholder={erroEmail || 'Digite seu e-mail'}
                        />
                        <p>SENHA</p>
                        <input
                            type='password'
                            className={`input-login ${erroSenha ? 'input-error' : ''}`}
                            value={senha}
                            onChange={(e) => {
                                setSenha(e.target.value);
                                setErroLogin(false); // Reseta erro de login ao mudar a senha
                            }}
                            onBlur={() => setTouched({ ...touched, senha: true })}
                            placeholder={erroSenha || 'Digite sua senha'}
                        />
                    </div>
                </div>

                <div className='login-button'>
                    <button className='btn-login' onClick={handleLogin}>ENTRAR</button>
                    <p>Não possui uma conta?</p>
                    <Link to='/cadastro' className='cad-btn'>Cadastre-se</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
