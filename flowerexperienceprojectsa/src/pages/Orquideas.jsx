import React, { useEffect, useState } from 'react';
import './Orquideas.css';
import { Link } from 'react-router-dom';
import orq_um from '../assets/orq-um.png';
import orq_dois from '../assets/orq-dois.png';
import orq_tres from '../assets/orq-tres.png';
import orq_qua from '../assets/orq-qua.png';
import orq_cin from '../assets/orq-cin.png';

const Orquideas = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {

    const produtosPadrao = [
      { nome: 'ORQUÍDEA LAGOINHA', imagem: orq_um },
      { nome: 'ORQUÍDEA JOAQUINA', imagem: orq_dois },
      { nome: 'ORQUÍDEA ARMAÇÃO', imagem: orq_tres },
      { nome: 'ORQUÍDEA AÇORES', imagem: orq_qua },
      { nome: 'ORQUÍDEA LAGOA PERI', imagem: orq_cin },
    ];

    const produtosCadastrados = JSON.parse(localStorage.getItem('produtos')) || {};


    if (!produtosCadastrados["Orquideas"]) {
      produtosCadastrados["Orquideas"] = produtosPadrao;
      localStorage.setItem('produtos', JSON.stringify(produtosCadastrados));
    }


    const produtosOrquideas = produtosCadastrados["Orquideas"] || [];


    setProdutos(produtosOrquideas);
  }, []);

  return (
    <div className='orquideas'>
      <div className='container'>
        <div className='title'>
          <h1 className='text-css'>ORQUÍDEAS</h1>
          <p className='text-p-css'>Orquídeas trazem sofisticação e beleza a qualquer ambiente, como casas, escritórios e recepções.</p>
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
          <Link to='/telaorquideas'>
            <button className='button-css'>VER MAIS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Orquideas;