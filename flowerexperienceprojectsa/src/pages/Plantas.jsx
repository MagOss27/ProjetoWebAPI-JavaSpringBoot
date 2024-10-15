import React, { useEffect, useState } from 'react';
import './Plantas.css';
import { Link } from 'react-router-dom';
import planta_um from '../assets/planta-um.png';
import planta_dois from '../assets/planta-dois.png';
import planta_tre from '../assets/planta-tre.png';
import planta_qua from '../assets/planta-qua.png';
import planta_cin from '../assets/planta-cin.png';

const Plantas = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {

    const produtosPadrao = [
      { nome: 'PLANTA JURERÊ', imagem: planta_um },
      { nome: 'PLANTA DANIELA', imagem: planta_dois },
      { nome: 'PLANTA CAMPECHE', imagem: planta_tre },
      { nome: 'PLANTA CANASVIEIRAS', imagem: planta_qua },
      { nome: 'PLANTA NAUFRAGADOS', imagem: planta_cin },
    ];


    const produtosCadastrados = JSON.parse(localStorage.getItem('produtos')) || {};


    if (!produtosCadastrados["Plantas"]) {
      produtosCadastrados["Plantas"] = produtosPadrao;
      localStorage.setItem('produtos', JSON.stringify(produtosCadastrados));
    }


    const produtosPlantas = produtosCadastrados["Plantas"] || [];


    setProdutos(produtosPlantas);
  }, []);

  return (
    <div className='plantas'>
      <div className='container'>
        <div className='title'>
          <h1 className='text-css'>PLANTAS</h1>
          <p className='text-p-css'>Plantas são destaques para diversos lugares, como casas, escritórios, recepções, estabelecimentos e muito mais.</p>
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
          <Link to='/telaplantas'>
            <button className='button-css'>VER MAIS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plantas;