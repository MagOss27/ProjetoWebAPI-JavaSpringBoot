import React, { useState, useEffect } from 'react';
import './Carrossel.css';
import banner1 from '../../assets/banner-g.png'; // Corrigido
import banner2 from '../../assets/banner-g2.png'; // Corrigido

const images = [banner1, banner2];

function Index() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Troca de imagem a cada 3 segundos

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, []);

    return (
        <div className='carousel'>
            <button className='button-banner'>
                {images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        className={`banner-css ${currentIndex === index ? 'visible' : ''}`} 
                        alt={`Banner ${index + 1}`} 
                    />
                ))}
            </button>
        </div>
    );
}

export default Index;
