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
  const [plantasCadastradas, setPlantasCadastradas] = useState([]);

  useEffect(() => {
    const produtosPadrao = [
        { nome: 'PLANTA JURERÊ', imagem: planta_um },
        { nome: 'PLANTA DANIELA', imagem: planta_dois },
        { nome: 'PLANTA CAMPECHE', imagem: planta_tre },
        { nome: 'PLANTA CANASVIEIRAS', imagem: planta_qua },
        { nome: 'PLANTA NAUFRAGADOS', imagem: planta_cin },
    ];

    // Buscar plantas cadastradas no backend
    const fetchPlantasCadastradas = async () => {
        try {
            const response = await fetch('http://localhost:8080/plantas'); // Endpoint do backend
            const data = await response.json();
            setPlantasCadastradas(data); // Atualiza com as plantas do banco
        } catch (error) {
            console.error("Erro ao buscar plantas:", error);
        }
    };

    // Atualizar os produtos
    fetchPlantasCadastradas();
    setProdutos([...produtosPadrao, ...plantasCadastradas]); // Combina plantas padrão com plantas do banco
}, [plantasCadastradas]); // Reexecuta quando plantas cadastradas forem atualizadas


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
