import React, { useState } from 'react';
import './Adm.css';
import prod_foto from '../assets/prod-foto.png';
import search_icon_light from '../assets/search_w.png'
import search_icon_dark from '../assets/search_b.png'

const Adm = ({ theme, setTheme }) => {
    const [isRegistering, setIsRegistering] = useState(false); // Estado para controlar o registro

    const handleRegisterClick = () => {
        setIsRegistering(false); // Ativa a animação ao clicar no botão Cadastrar
    };

    const handleEditClick = () => {
        setIsRegistering(true); // Desativa a animação ao clicar no botão Editar
    };

    return (
        <div className='adm'>
            <div className='principal'>
                <div className='div-infos-adm'>
                    <div className='foto-adm'></div>
                    <div className='nome-adm'>
                        <p>Olá ADMINISTRADOR</p>
                    </div>
                </div>

                <div className='principal-dois'>

                    <div className={`container-mid ${isRegistering ? 'registering' : ''}`}>

                        <div className='left-container'>
                            <div className='search-box-prod'>
                                <input type="text-prod" placeholder='Procurar' />
                                
                                <img src={theme == 'dark' ? search_icon_dark : search_icon_light} alt='' />
                                
                            </div>
                        <p>NOME</p>
                            <input type='text' className='input-adm-css' placeholder='Digite o nome do Produto.' />
                            <p>CATEGORIA</p>
                            <input type='text' className='input-adm-css' placeholder='Digite a categoria do Produto.' />
                            <p>DESCRIÇÃO</p>
                            <input type='text' className='input-adm-css' placeholder='Digite a descrição do Produto.' />
                            <p>TAMANHO</p>
                            <input type='text' className='input-adm-css' placeholder='Digite o tamanho do Produto.' />
                            <div className='btn'>
                            <button className='btn-css'>EDITAR</button>
                            <button className='btn-css-excluir'>EXCLUIR</button>
                            </div>
                            <img src={prod_foto} className='prod-foto-css' />
                        </div>

                        <div className='right-container'>
                            <p>NOME</p>
                            <input type='text' className='input-adm-css' placeholder='Digite o nome do Produto.' />
                            <p>CATEGORIA</p>
                            <input type='text' className='input-adm-css' placeholder='Digite a categoria do Produto.' />
                            <p>DESCRIÇÃO</p>
                            <input type='text' className='input-adm-css' placeholder='Digite a descrição do Produto.' />
                            <p>TAMANHO</p>
                            <input type='text' className='input-adm-css' placeholder='Digite o tamanho do Produto.' />
                            <button className='button-prod-css-adm'>CADASTRAR</button>

                                        
                        </div>
                    </div>

                    <div className='container-button'>
                        <div className='button-div-um'>
                            <button className='button-prod-css' onClick={handleEditClick}>EDITAR PRODUTO</button>
                        </div>
                        <div className='button-div-dois'>
                            <button className='button-prod-css' onClick={handleRegisterClick}>CADASTRAR PRODUTO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Adm;
