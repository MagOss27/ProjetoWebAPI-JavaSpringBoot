import React, { useState } from 'react';
import './TelaOrquideas.css';
import orq_um from '../assets/orq-um.png';
import orq_dois from '../assets/orq-dois.png';
import orq_tres from '../assets/orq-tres.png';
import orq_qua from '../assets/orq-qua.png';
import orq_cin from '../assets/orq-cin.png';
import Modal from '../components/Modal/Modal'; 

const TelaOrquideas = ({ theme, setTheme, addPedido, isLoggedIn }) => {
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
            const novoPedido = { nome: 'Orquídea', quantidade };
    
            const pedidosExistentes = JSON.parse(localStorage.getItem('pedidos')) || [];
            pedidosExistentes.push(novoPedido);
            localStorage.setItem('pedidos', JSON.stringify(pedidosExistentes));
    
            setModalTitle('Sucesso');
            setModalMessage(`Adicionado ${quantidade} orquídea(s) ao pedido!`);
            setModalOpen(true);
            setQuantidade(1); // Redefine a quantidade
        } else {
            setModalTitle('Erro');
            setModalMessage('Quantidade inválida. Por favor, insira um número maior que 0.');
            setModalOpen(true);
        }
    };
    
    return (
        <div className='tela-orquideas'>
            <div className='ta-principal-orquideas'>
                <div className='ta-esquerda-orquideas'>
                    <div className='ta-previas-orquideas'>
                        <img src={orq_um} className='img-previas-orquideas' alt="Orquídea 1" />
                        <img src={orq_dois} className='img-previas-orquideas' alt="Orquídea 2" />
                        <img src={orq_tres} className='img-previas-orquideas' alt="Orquídea 3" />
                        <img src={orq_qua} className='img-previas-orquideas' alt="Orquídea 4" />
                        <img src={orq_cin} className='img-previas-orquideas' alt="Orquídea 5" />
                    </div>
                    <img src={orq_um} className='img-um-previas-orquideas' alt="Orquídea grande" />
                </div>

                <div className='ta-direita-orquideas'>
                    <div className='ta-titulo-orquideas'>
                        <p className='ta-titulo-p-orquideas'>ORQUÍDEAS</p>
                    </div>

                    <div className='ta-estrelas-orquideas'>
                        <p className='ta-estrelas-p-orquideas'>⭐⭐⭐⭐⭐</p>
                    </div>

                    <div className='ta-infos-orquideas'>
                        <div className='ta-infos-box-orquideas'>
                            <p className='ta-infos-p-orquideas'>
                                Experimente transformar o seu lar com estilosas e impactantes Orquídeas.<br/><br/>
                                Tamanho: 1m de altura por 70 cm de largura.<br/>
                                Vasos: Papelão colorido, Vasos de polietileno ou vidro.<br/>
                                Renovação: À cada 7 ou 15 dias.
                            </p>
                        </div>
                    </div>

                    <div className='ta-entrega-orquideas'>
                        <p className='ta-entrega-p-titulo-orquideas'>ENTREGAS PARA O MESMO DIA</p>
                        <p className='ta-entrega-p-text-orquideas'>
                            Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
                        </p>
                    </div>

                    <div className='ta-button-addpedido-orquideas'>
                        <input 
                            type='number' 
                            className='inpt-number-orquideas' 
                            value={quantidade} 
                            onChange={(e) => setQuantidade(Number(e.target.value))} 
                            min="1" 
                        />
                        <button 
                            className='btn-addpedido-orquideas' 
                            onClick={handleAddToPedido}
                        >
                            ADICIONAR AO PEDIDO
                        </button>
                    </div>
                </div>
            </div>

            <div className='btn-saiba-mais-orquideas'>
                <button className='btn-saiba-mais-css-orquideas' onClick={handleToggleCard}>COMO FUNCIONA</button>
            </div>

            {showCard && (
                <div className='como-funciona-card-orquideas'>
                    <button className='btn-fechar-orquideas' onClick={handleToggleCard}>FECHAR</button>
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

export default TelaOrquideas;