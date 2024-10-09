import React from 'react'
import './Orquideas.css'
import { Link } from 'react-router-dom';
import orq_um from '../assets/orq-um.png'
import orq_dois from '../assets/orq-dois.png'
import orq_tres from '../assets/orq-tres.png'
import orq_qua from '../assets/orq-qua.png'
import orq_cin from '../assets/orq-cin.png'
import blight from '../assets/background-light.png'
import bdark from '../assets/background-dark.png'

const Orquideas = ({ theme, setTheme }) => {
  return (
    <>
      <div className='orquideas'>
        <div className='container'>

          <div className='title'>
            <h1 className='text-css'>ORQUÍDEAS</h1>
            <p className='text-p-css'>Orquídeas trazem sofisticação e beleza a qualquer ambiente, como casas, escritórios e recepções.</p>
          </div>

          <div className='div-cards'>

            <div className="cards">

              <div className='card'>

                <div className='card-image'>
                  <img src={orq_um} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>ORQUÍDEA LAGOINHA</h1>
                </div>

              </div>


              <div className='card'>

                <div className='card-image'>
                  <img src={orq_dois} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>ORQUÍDEA JOAQUINA</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={orq_tres} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>ORQUÍDEA ARMAÇÃO</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={orq_qua} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>ORQUÍDEA AÇORES</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={orq_cin} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>ORQUÍDEA LAGOA PERI</h1>
                </div>

              </div>
            </div>
          </div>

          <div className='div-button'>
          <Link to='/telaorquideas'><button className='button-css'>VER MAIS</button></Link>

          </div>

        </div>


      </div>
    </>
  )
}

export default Orquideas


