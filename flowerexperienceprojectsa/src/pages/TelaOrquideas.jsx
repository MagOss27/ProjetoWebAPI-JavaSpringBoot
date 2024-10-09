// import React from 'react'
// import './TelaArranjos.css'
// import { Link } from 'react-router-dom';
// import arr_um from '../assets/arr-um.png'
// import arr_dois from '../assets/arr-dois.png'
// import arr_tres from '../assets/arr-tres.png'
// import arr_qua from '../assets/arr-qua.png'
// import arr_cin from '../assets/arr-cin.png'
// import blight from '../assets/background-light.png'
// import bdark from '../assets/background-dark.png'

// const TelaArranjos = () => {
//     return (
//         <div className='tela-arranjos'>
//             <div className='ta-principal'>
//                 <div className='ta-esquerda'>
//                     <div className='ta-previas'>
//                         <img src={arr_um} className='img-previas' />
//                         <img src={arr_dois} className='img-previas' />
//                         <img src={arr_tres} className='img-previas' />
//                         <img src={arr_qua} className='img-previas' />
//                         <img src={arr_cin} className='img-previas' />
//                     </div>
//                     <img src={arr_um} className='img-um-previas' />
//                 </div>

//                 <div className='ta-direita'>
//                     <div className='ta-titulo'>
//                         <p className='ta-titulo-p'>ARRANJOS</p>
//                     </div>

//                     <div className='ta-estrelas'>
//                         <p className='ta-estrelas-p'>⭐⭐⭐⭐⭐</p>
//                     </div>

//                     <div className='ta-infos'>
//                         <div className='ta-infos-box'>
//                             <p className='ta-infos-p'>Experimente transformar o seu lar com estilosas e impactantes plantas, contendo vasos resistentes e elegantes de polietileno, pedras, seixos e cascas.<br></br> <br></br>(Duração de plano: 30 Dias).<br></br><br></br>

//                                 Tamanho das Plantas: 1m de altura por 70 cm de largura.<br></br>
//                                 Vasos: Polietileno nas cores, mamore, cimento e areia.<br></br>
//                                 Tempo de Permanência:  7 dias
//                             </p>
//                         </div>
//                     </div>

//                     <div className='ta-entrega'>
//                         <p className='ta-entrega-p-titulo'>
//                         ENTREGAS PARA O MESMO DIA
//                         </p>
//                         <p className='ta-entrega-p-text'>
//                         Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
//                         </p>
//                     </div>

//                     <div className='ta-button-addpedido'>
//                         <input type='number' className='inpt-number'></input>
//                         <button className='btn-addpedido'>ADICIONAR AO PEDIDO</button>
//                     </div>

//                 </div>
//             </div>

//             <div className='btn-saiba-mais'>
//                 <button className='btn-saiba-mais-css'>COMO FUNCIONA</button>
//             </div>
//         </div>
//     );
// }

// export default TelaArranjos;

import React, { useState } from 'react';
import './TelaOrquideas.css';
import orq_um from '../assets/orq-um.png';
import orq_dois from '../assets/orq-dois.png';
import orq_tres from '../assets/orq-tres.png';
import orq_qua from '../assets/orq-qua.png';
import orq_cin from '../assets/orq-cin.png';

const TelaOrquideas = ({theme, setTheme}) => {
    // Estado para controlar a visibilidade do card
    const [showCard, setShowCard] = useState(false);

    // Função que alterna a visibilidade do card
    const handleToggleCard = () => {
        setShowCard(!showCard);
    };

    return (
        <div className='tela-orquideas'>
            <div className='ta-principal-orquideas'>
                <div className='ta-esquerda-orquideas'>
                    <div className='ta-previas-orquideas'>
                        <img src={orq_um} className='img-previas-orquideas' alt="Arranjo 1" />
                        <img src={orq_dois} className='img-previas-orquideas' alt="Arranjo 2" />
                        <img src={orq_tres} className='img-previas-orquideas' alt="Arranjo 3" />
                        <img src={orq_qua} className='img-previas-orquideas' alt="Arranjo 4" />
                        <img src={orq_cin} className='img-previas-orquideas' alt="Arranjo 5" />
                    </div>
                    <img src={orq_um} className='img-um-previas-orquideas' alt="Arranjo grande" />
                </div>

                <div className='ta-direita-orquideas'>
                    <div className='ta-titulo-orquideas'>
                        <p className='ta-titulo-p-orquideas'>ORQUIDEAS</p>
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
                        <input type='number' className='inpt-number-orquideas' placeholder="1" />
                        <button className='btn-addpedido-orquideas'>ADICIONAR AO PEDIDO</button>
                    </div>

                </div>
            </div>

            <div className='btn-saiba-mais-orquideas'>
                <button className='btn-saiba-mais-css-orquideas' onClick={handleToggleCard}>COMO FUNCIONA</button>
            </div>

            {/* O card que aparece e desaparece ao clicar no botão */}
            {showCard && (
                <div className='como-funciona-card-orquideas'>
                
                    <button className='btn-fechar-orquideas' onClick={handleToggleCard}>FECHAR</button>
                </div>
            )}
        </div>
    );
}

export default TelaOrquideas;

