import React from 'react'
import './Plantas.css'
import { Link } from 'react-router-dom';
import planta_um from '../assets/planta-um.png'
import planta_dois from '../assets/planta-dois.png'
import planta_tre from '../assets/planta-tre.png'
import planta_qua from '../assets/planta-qua.png'
import planta_cin from '../assets/planta-cin.png'
import blight from '../assets/background-light.png'
import bdark from '../assets/background-dark.png'

const Plantas = ({ theme, setTheme }) => {
  return (
    <>
      <div className='plantas'>
        <div className='container'>

          <div className='title'>
            <h1 className='text-css'>PLANTAS</h1>
            <p className='text-p-css'>Plantas são destaques para diversos lugares, como casas, escritórios, recepções, estabelecimentos e muito mais.</p>
          </div>

          <div className='div-cards'>

            <div className="cards">

              <div className='card'>

                <div className='card-image'>
                  <img src={planta_um} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>PLANTA JURERÊ</h1>
                </div>

              </div>


              <div className='card'>

                <div className='card-image'>
                  <img src={planta_dois} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>PLANTA DANIELA</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={planta_tre} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>PLANTA CAMPECHE</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={planta_qua} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>PLANTA CANASVIEIRAS</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={planta_cin} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>PLANTA NAUFRAGADOS</h1>
                </div>

              </div>
            </div>
          </div>

          <div className='div-button'>
            <button className='button-css'>
            <Link to='/telaplantas'><button className='button-css'>VER MAIS</button></Link>
            </button>

          </div>

        </div>


      </div>
    </>
  )
}

export default Plantas
