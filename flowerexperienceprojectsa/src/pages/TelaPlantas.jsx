import React, { useState } from 'react';
import './TelaPlantas.css';
import planta_um from '../assets/planta-um.png';
import planta_dois from '../assets/planta-dois.png';
import planta_tre from '../assets/planta-tre.png';
import planta_qua from '../assets/planta-qua.png';
import planta_cin from '../assets/planta-cin.png';
import Modal from '../components/Modal/Modal'; 

const TelaPlantas = ({ theme, setTheme, addPedido }) => {
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
            const novoPedido = { nome: 'Planta', quantidade };
    
            const pedidosExistentes = JSON.parse(localStorage.getItem('pedidos')) || [];
            pedidosExistentes.push(novoPedido);
            localStorage.setItem('pedidos', JSON.stringify(pedidosExistentes));
    
            setModalTitle('Sucesso');
            setModalMessage(`Adicionado ${quantidade} planta(s) ao pedido!`);
            setModalOpen(true);
            setQuantidade(1); // Redefine a quantidade
        } else {
            setModalTitle('Erro');
            setModalMessage('Quantidade inválida. Por favor, insira um número maior que 0.');
            setModalOpen(true);
        }
    };

    return (
        <div className='tela-plantas'>
            <div className='ta-principal-plantas'>
                <div className='ta-esquerda-plantas'>
                    <div className='ta-previas-plantas'>
                        <img src={planta_um} className='img-previas-plantas' alt="Planta 1" />
                        <img src={planta_dois} className='img-previas-plantas' alt="Planta 2" />
                        <img src={planta_tre} className='img-previas-plantas' alt="Planta 3" />
                        <img src={planta_qua} className='img-previas-plantas' alt="Planta 4" />
                        <img src={planta_cin} className='img-previas-plantas' alt="Planta 5" />
                    </div>
                    <img src={planta_um} className='img-um-previas-plantas' alt="Planta grande" />
                </div>

                <div className='ta-direita-plantas'>
                    <div className='ta-titulo-plantas'>
                        <p className='ta-titulo-p-plantas'>PLANTAS</p>
                    </div>

                    <div className='ta-estrelas-plantas'>
                        <p className='ta-estrelas-p-plantas'>⭐⭐⭐⭐⭐</p>
                    </div>

                    <div className='ta-infos-plantas'>
                        <div className='ta-infos-box-plantas'>
                            <p className='ta-infos-p-plantas'>
                                Experimente transformar o seu lar com estilosas e impactantes plantas.<br/><br/>
                                Tamanho: 1m de altura por 70 cm de largura.<br/>
                                Vasos: Polietileno nas cores, mármore, cimento e areia.<br/>
                                Tempo de Permanência: 7 dias
                            </p>
                        </div>
                    </div>

                    <div className='ta-entrega-plantas'>
                        <p className='ta-entrega-p-titulo-plantas'>ENTREGAS PARA O MESMO DIA</p>
                        <p className='ta-entrega-p-text-plantas'>
                            Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
                        </p>
                    </div>

                    <div className='ta-button-addpedido-plantas'>
                        <input 
                            type='number' 
                            className='inpt-number-plantas' 
                            value={quantidade} 
                            onChange={(e) => setQuantidade(Number(e.target.value))} 
                            min="1" 
                        />
                        <button 
                            className='btn-addpedido-plantas' 
                            onClick={handleAddToPedido}
                        >
                            ADICIONAR AO PEDIDO
                        </button>
                    </div>

                </div>
            </div>

            <div className='btn-saiba-mais-plantas'>
                <button className='btn-saiba-mais-css-plantas' onClick={handleToggleCard}>COMO FUNCIONA</button>
            </div>

            {showCard && (
                <div className='como-funciona-card-plantas'>
                    <button className='btn-fechar-plantas' onClick={handleToggleCard}>FECHAR</button>
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

export default TelaPlantas;
