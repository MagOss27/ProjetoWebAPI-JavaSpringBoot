import React, { useEffect, useState } from 'react';
import './Arranjos.css';
import { Link } from 'react-router-dom';
import arr_um from '../assets/arr-um.png';
import arr_dois from '../assets/arr-dois.png';
import arr_tres from '../assets/arr-tres.png';
import arr_qua from '../assets/arr-qua.png';
import arr_cin from '../assets/arr-cin.png';

const Arranjos = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        const produtosPadrao = [
            { nome: 'ARRANJO SANTO ANTÔNIO', imagem: arr_um },
            { nome: 'ARRANJO LAGOA-CONCEIÇÃO', imagem: arr_dois },
            { nome: 'ARRANJO BARRA DA LAGOA', imagem: arr_tres },
            { nome: 'ARRANJO GRAVATÁ', imagem: arr_qua },
            { nome: 'ARRANJO NAUFRAGADOS', imagem: arr_cin },
        ];


        const produtosCadastrados = JSON.parse(localStorage.getItem('produtos')) || {};


        if (!produtosCadastrados["Arranjos"]) {
            produtosCadastrados["Arranjos"] = produtosPadrao;
            localStorage.setItem('produtos', JSON.stringify(produtosCadastrados));
        }


        const produtosArranjos = produtosCadastrados["Arranjos"] || [];


        setProdutos(produtosArranjos);
    }, []);

    return (
        <div className='arranjos'>
            <div className='container'>
                <div className='title'>
                    <h1 className='text-css'>ARRANJOS</h1>
                    <p className='text-p-css-a'>
                        Arranjos florais transformam casas, escritórios e recepções em ambientes mais encantadores.
                    </p>
                </div>

                <div className='div-cards'>
                    <div className="cards">
                        {produtos.map((produto, index) => (
                            <div className='card' key={index}>
                                <div className='card-image'>
                                    <img src={produto.imagem} alt={produto.nome} className='foto-plantas' />
                                </div>
                                <div className='card-title'>
                                    <h1 className='nome-planta'>{produto.nome}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='div-button'>
                    <Link to='/telaarranjos'>
                        <button className='button-css'>VER MAIS</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Arranjos;