import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Cadastro.css';
import axios from 'axios';
import light_logo_red from '../assets/logo-redonda-light.png';
import dark_logo_red from '../assets/logo-redonda-dark.png';

const Cadastro = ({ theme }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('');
    const [erroConfirmarSenha, setErroConfirmarSenha] = useState('');

    const [touched, setTouched] = useState({
        nome: false,
        email: false,
        senha: false,
        confirmarSenha: false,
    });

    const navigate = useNavigate();

    const validarEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    // useEffect para validar nome
    useEffect(() => {
        if (touched.nome) {
            if (nome.trim() === '') {
                setErroNome('Nome não pode ser vazio.');
            } else if (nome.trim().length < 3) {
                setErroNome('Nome deve ter pelo menos 3 caracteres.');
            } else {
                setErroNome('');
            }
        }
    }, [nome, touched.nome]);

    // useEffect para validar email
    useEffect(() => {
        if (touched.email) {
            if (email.trim() === '') {
                setErroEmail('E-mail não pode ser vazio.');
            } else if (!validarEmail(email)) {
                setErroEmail('E-mail inválido.');
            } else {
                setErroEmail('');
            }
        }
    }, [email, touched.email]);

    // useEffect para validar senha
    useEffect(() => {
        if (touched.senha) {
            if (senha.trim() === '') {
                setErroSenha('Senha não pode ser vazia.');
            } else if (senha.length < 8) {
                setErroSenha('Senha deve ter pelo menos 8 caracteres.');
            } else {
                setErroSenha('');
            }
        }
    }, [senha, touched.senha]);

    // useEffect para validar confirmação de senha
    useEffect(() => {
        if (touched.confirmarSenha) {
            if (confirmarSenha.trim() === '') {
                setErroConfirmarSenha('Confirmação de senha não pode ser vazia.');
            } else if (senha !== confirmarSenha) {
                setErroConfirmarSenha('Senhas não coincidem.');
            } else {
                setErroConfirmarSenha('');
            }
        }
    }, [confirmarSenha, senha, touched.confirmarSenha]);

    const handleCadastro = async (e) => {
        e.preventDefault();

        // Forçar todos os campos a serem "tocados" para exibir mensagens de erro
        setTouched({
            nome: true,
            email: true,
            senha: true,
            confirmarSenha: true,
        });

        // Verificar se todos os campos estão válidos
        if (erroNome || erroEmail || erroSenha || erroConfirmarSenha ||
            nome.trim() === '' || email.trim() === '' || senha.trim() === '' || confirmarSenha.trim() === '') {
            return; // Não prosseguir se houver erros
        }

        try {
            const response = await axios.post('http://localhost:8080/clientes', {
                nome: nome,
                email: email,
                senha: senha,
            });

            if (response.status === 201) {
                localStorage.setItem('userID', response.data.id);

                // Limpar campos
                setNome('');
                setEmail('');
                setSenha('');
                setConfirmarSenha('');

                navigate('/login');
            }
        } catch (error) {
            console.error('Erro ao realizar cadastro:', error);
            alert('Erro ao realizar cadastro. Tente novamente.');
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
                    <form onSubmit={handleCadastro} className='cadastro-inputs'>
                        <p>NOME</p>
                        <input
                            type='text'
                            className={`input-cadastro ${erroNome ? 'input-error' : ''}`}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            onBlur={() => setTouched({ ...touched, nome: true })}
                            placeholder={erroNome || 'Digite seu nome'}
                            required
                        />
                        <p>E-MAIL</p>
                        <input
                            type='email'
                            className={`input-cadastro ${erroEmail ? 'input-error' : ''}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={() => setTouched({ ...touched, email: true })}
                            placeholder={erroEmail || 'Digite seu e-mail'}
                            required
                        />
                        <p>SENHA</p>
                        <input
                            type='password'
                            className={`input-cadastro ${erroSenha ? 'input-error' : ''}`}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            onBlur={() => setTouched({ ...touched, senha: true })}
                            placeholder={erroSenha || 'Digite sua senha'}
                            required
                        />
                        <p>CONFIRMAR SENHA</p>
                        <input
                            type='password'
                            className={`input-cadastro ${erroConfirmarSenha ? 'input-error' : ''}`}
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            onBlur={() => setTouched({ ...touched, confirmarSenha: true })}
                            placeholder={erroConfirmarSenha || 'Confirme sua senha'}
                            required
                        />
                    </form>
                </div>

                <div className='cadastro-button'>
                    <button type='submit' className='btn-cadastro' onClick={handleCadastro}>CADASTRAR</button>
                    <p>Já possui uma conta?</p>
                    <Link to='/login' className='cad-btn'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
