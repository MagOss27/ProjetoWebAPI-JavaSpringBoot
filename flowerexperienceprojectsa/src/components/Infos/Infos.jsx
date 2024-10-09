import React from 'react';
import './Infos.css';
import fretes_light from '../../assets/fretes-light.png';
import fretes_dark from '../../assets/fretes-dark.png';
import card_dark from '../../assets/card-dark.png';
import card_light from '../../assets/card-light.png';
import calendario_dark from '../../assets/calendario-dark.png';
import calendario_light from '../../assets/calendario-light.png';

const Infos = ({ theme, setTheme }) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    return (

        <div className='body-container'>

            <div className='body-infos'>

                <div className='frete-container'>

                    <div className='frete-box'>

                        <div className='frete-icon'>
                        <img src={theme == 'dark' ? fretes_light : fretes_dark} className='frete-icon-css' />

                        </div>

                        <div className='frete-infos'>

                            <div className='titulo-frete'>
                                 <p className='poppins-bold'>LEVAMOS E BUSCAMOS</p> 

                            </div>

                            <div className='frase-frete'>
                                 <p className='poppins-regular'>não se preocupe com o deslocamento.</p> 

                            </div>

                        </div>

                    </div>

                </div>

                <div className='card-container'>

                    <div className='card-box'>

                        <div className='card-icon'>
                        <img src={theme == 'dark' ? card_light : card_dark} className='card-icon-css' />
                        </div>

                        <div className='card-infos'>

                            <div className='titulo-card'>   
                            <p className='poppins-bold'>ASSINE AINDA HOJE</p>

                            </div>

                            <div className='frase-card'>    
                                <p className='poppins-regular'>assine exatamente do seu jeito.</p>
                            </div>

                        </div>

                    </div>

                </div>

                <div className='calendario-container'>

                    <div className='calendario-box'>

                        <div className='calendario-icon'>
                        <img src={theme == 'dark' ? calendario_light : calendario_dark} className='calendario-icon-css' />
                        </div>

                        <div className='calendario-infos'>

                            <div className='titulo-calendario'>
                            <p className='poppins-bold'>AGENDE SUA ENTREGA</p>
                            </div>

                            <div className='frase-calendario'>
                            <p className='poppins-regular'>escolha o melhor dia para florir.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Infos;
