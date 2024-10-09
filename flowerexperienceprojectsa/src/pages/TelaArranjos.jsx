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
import './TelaArranjos.css';
import arr_um from '../assets/arr-um.png';
import arr_dois from '../assets/arr-dois.png';
import arr_tres from '../assets/arr-tres.png';
import arr_qua from '../assets/arr-qua.png';
import arr_cin from '../assets/arr-cin.png';

const TelaArranjos = ({ theme, setTheme }) => {
    // Estado para controlar a visibilidade do card
    const [showCard, setShowCard] = useState(false);

    // Função que alterna a visibilidade do card
    const handleToggleCard = () => {
        setShowCard(!showCard);
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
                        <input type='number' className='inpt-number-arranjos' placeholder="1" />
                        <button className='btn-addpedido-arranjos'>ADICIONAR AO PEDIDO</button>
                    </div>

                </div>
            </div>

            <div className='btn-saiba-mais-arranjos'>
                <button className='btn-saiba-mais-css-arranjos' onClick={handleToggleCard}>COMO FUNCIONA</button>
            </div>

            {/* O card que aparece e desaparece ao clicar no botão */}
            {showCard && (
                <div className='como-funciona-card-arranjos'>

                    <button className='btn-fechar-arranjos' onClick={handleToggleCard}>FECHAR</button>
                </div>
            )}
        </div>
    );
}

export default TelaArranjos;

