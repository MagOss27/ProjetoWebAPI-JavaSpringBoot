import React, { useState } from 'react';
import './TelaArranjos.css';
import Modal from '../components/Modal/Modal';
import arr_um from '../assets/arr-um.png';
import arr_dois from '../assets/arr-dois.png';
import arr_tres from '../assets/arr-tres.png';
import arr_qua from '../assets/arr-qua.png';
import arr_cin from '../assets/arr-cin.png';


const TelaArranjos = ({ theme, setTheme, addPedido, isLoggedIn }) => {
    const [showCard, setShowCard] = useState(false);
    const [quantidade, setQuantidade] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalMessage, setModalMessage] = useState('');

    const handleToggleCard = () => {
        setShowCard(!showCard);
    };

    const handleAddToPedido = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
        if (!isLoggedIn) {
            setModalTitle('Atenção');
            setModalMessage('Por favor, faça login para adicionar pedidos.');
            setModalOpen(true);
            return;
        }
    
        if (quantidade > 0) {
            const novoPedido = { nome: 'Arranjo', quantidade };
    
            const pedidosExistentes = JSON.parse(localStorage.getItem('pedidos')) || [];
            pedidosExistentes.push(novoPedido);
            localStorage.setItem('pedidos', JSON.stringify(pedidosExistentes));
    
            setModalTitle('Sucesso');
            setModalMessage(`Adicionado ${quantidade} arranjo(s) ao pedido!`);
            setModalOpen(true);
            setQuantidade(1); // Redefine a quantidade
        } else {
            setModalTitle('Erro');
            setModalMessage('Quantidade inválida. Por favor, insira um número maior que 0.');
            setModalOpen(true);
        }
    };

    return (
        <div className='tela-arranjos'>
            <div className='ta-principal-arranjos'>
                <div className='ta-esquerda-arranjos'>
                    <div className='ta-previas-arranjos'>
                        <img src={arr_um} className='img-previas-arranjos' alt="Arranjo 1" />
                        <img src={arr_dois} className='img-previas-arranjos' alt="Arranjo 2" />
                        <img src={arr_tres} className='img-previas-arranjos' alt="Arranjo 3" />
                        <img src={arr_qua} className='img-previas-arranjos' alt="Arranjo 4" />
                        <img src={arr_cin} className='img-previas-arranjos' alt="Arranjo 5" />
                    </div>
                    <img src={arr_um} className='img-um-previas-arranjos' alt="Arranjo grande" />
                </div>

                <div className='ta-direita-arranjos'>
                    <div className='ta-titulo-arranjos'>
                        <p className='ta-titulo-p-arranjos'>ARRANJOS</p>
                    </div>

                    <div className='ta-estrelas-arranjos'>
                        <p className='ta-estrelas-p-arranjos'>⭐⭐⭐⭐⭐</p>
                    </div>

                    <div className='ta-infos-arranjos'>
                        <div className='ta-infos-box-arranjos'>
                            <p className='ta-infos-p-arranjos'>
                                Experimente transformar o seu lar com estilosos e impactantes Arranjos.<br /><br />
                                Tamanho: 80cm de altura por 70 cm de largura.<br />
                                Vasos: Papelão colorido, Vasos de polietileno ou vidro.<br />
                                Renovação: À cada 7 ou 15 dias.
                            </p>
                        </div>
                    </div>

                    <div className='ta-entrega-arranjos'>
                        <p className='ta-entrega-p-titulo-arranjos'>ENTREGAS PARA O MESMO DIA</p>
                        <p className='ta-entrega-p-text-arranjos'>
                            Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
                        </p>
                    </div>

                    <div className='ta-button-addpedido-arranjos'>
                        <input 
                            type='number' 
                            className='inpt-number-arranjos' 
                            value={quantidade} 
                            onChange={(e) => setQuantidade(Number(e.target.value))} 
                            min="1" 
                        />
                        <button 
                            className='btn-addpedido-arranjos' 
                            onClick={handleAddToPedido}
                        >
                            ADICIONAR AO PEDIDO
                        </button>
                    </div>
                </div>
            </div>

            <div className='btn-saiba-mais-arranjos'>
                <button className='btn-saiba-mais-css-arranjos' onClick={handleToggleCard}>
                    COMO FUNCIONA
                </button>
            </div>

            {showCard && (
                <div className='como-funciona-card-arranjos'>
                    <button className='btn-fechar-arranjos' onClick={handleToggleCard}>FECHAR</button>
                </div>
            )}

            <Modal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                title={modalTitle} 
                message={modalMessage} 
            />
        </div>
    );
}

export default TelaArranjos;



