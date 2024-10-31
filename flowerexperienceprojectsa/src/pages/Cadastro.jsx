import React, { useState } from 'react';
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
    
    // Estados para mensagens de erro individuais
    const [erroNome, setErroNome] = useState('');
    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('');
    const [erroConfirmarSenha, setErroConfirmarSenha] = useState('');

    const navigate = useNavigate();

    const validarEmail = (email) => {
        // Regex básico para validar formato de e-mail
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleCadastro = async (e) => {
        e.preventDefault();
        let hasError = false;

        // Verificação se o campo nome está vazio
        if (nome.trim() === '') {
            setErroNome('Nome não pode ser vazio.');
            hasError = true;
        } else if (nome.trim().length < 3) {
            setErroNome('Nome deve ter pelo menos 3 caracteres.');
            hasError = true;
        } else {
            setErroNome('');
        }

        // Verificação se o campo e-mail está vazio
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
        } else if (senha.length < 8) {
            setErroSenha('Senha deve ter pelo menos 8 caracteres.');
            hasError = true;
        } else {
            setErroSenha('');
        }

        // Verificação se o campo confirmar senha está vazio
        if (confirmarSenha.trim() === '') {
            setErroConfirmarSenha('Confirmação de senha não pode ser vazia.');
            hasError = true;
        } else if (senha !== confirmarSenha) {
            setErroConfirmarSenha('Senhas não coincidem.');
            hasError = true;
        } else {
            setErroConfirmarSenha('');
        }

        // Se houver algum erro, não prossegue com o cadastro
        if (hasError) return;

        try {
            const response = await axios.post('http://localhost:8080/clientes', {
                nome: nome,
                email: email,
                senha: senha,
            });

            if (response.status === 201) {
                alert('Cadastro realizado com sucesso!');
                localStorage.setItem('userID', response.data.id);

                setNome('');
                setEmail('');
                setSenha('');
                setConfirmarSenha('');
                setErroNome('');
                setErroEmail('');
                setErroSenha('');
                setErroConfirmarSenha('');

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
                            className={`input-cadastro ${erroNome ? 'input-error' : ''}`} // Classe de erro condicional
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder={erroNome || 'Digite seu nome'}
                            required
                        />
                        <p>E-MAIL</p>
                        <input
                            type='email'
                            className={`input-cadastro ${erroEmail ? 'input-error' : ''}`} // Classe de erro condicional
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={erroEmail || 'Digite seu e-mail'}
                            required
                        />
                        <p>SENHA</p>
                        <input
                            type='password'
                            className={`input-cadastro ${erroSenha ? 'input-error' : ''}`} // Classe de erro condicional
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder={erroSenha || 'Digite sua senha'}
                            required
                        />
                        <p>CONFIRMAR SENHA</p>
                        <input
                            type='password'
                            className={`input-cadastro ${erroConfirmarSenha ? 'input-error' : ''}`} // Classe de erro condicional
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
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