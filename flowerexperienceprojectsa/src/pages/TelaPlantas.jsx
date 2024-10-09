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
import './TelaPlantas.css';
import planta_um from '../assets/planta-um.png';
import planta_dois from '../assets/planta-dois.png';
import planta_tre from '../assets/planta-tre.png';
import planta_qua from '../assets/planta-qua.png';
import planta_cin from '../assets/planta-cin.png';

const TelaPlantas = ({theme, setTheme}) => {
    // Estado para controlar a visibilidade do card
    const [showCard, setShowCard] = useState(false);

    // Função que alterna a visibilidade do card
    const handleToggleCard = () => {
        setShowCard(!showCard);
    };

    return (
        <div className='tela-plantas'>
            <div className='ta-principal-plantas'>
                <div className='ta-esquerda-plantas'>
                    <div className='ta-previas-plantas'>
                        <img src={planta_um} className='img-previas-plantas' alt="Arranjo 1" />
                        <img src={planta_dois} className='img-previas-plantas' alt="Arranjo 2" />
                        <img src={planta_tre} className='img-previas-plantas' alt="Arranjo 3" />
                        <img src={planta_qua} className='img-previas-plantas' alt="Arranjo 4" />
                        <img src={planta_cin} className='img-previas-plantas' alt="Arranjo 5" />
                    </div>
                    <img src={planta_um} className='img-um-previas-plantas' alt="Arranjo grande" />
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
                        <input type='number' className='inpt-number-plantas' placeholder="1" />
                        <button className='btn-addpedido-plantas'>ADICIONAR AO PEDIDO</button>
                    </div>

                </div>
            </div>

            <div className='btn-saiba-mais-plantas'>
                <button className='btn-saiba-mais-css-plantas' onClick={handleToggleCard}>COMO FUNCIONA</button>
            </div>

            {/* O card que aparece e desaparece ao clicar no botão */}
            {showCard && (
                <div className='como-funciona-card-plantas'>
                
                    <button className='btn-fechar-plantas' onClick={handleToggleCard}>FECHAR</button>
                </div>
            )}
        </div>
    );
}

export default TelaPlantas;

