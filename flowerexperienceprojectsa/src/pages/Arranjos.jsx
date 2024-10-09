import React from 'react'
import './Arranjos.css'
import {  Link } from 'react-router-dom';
import arr_um from '../assets/arr-um.png'
import arr_dois from '../assets/arr-dois.png'
import arr_tres from '../assets/arr-tres.png'
import arr_qua from '../assets/arr-qua.png'
import arr_cin from '../assets/arr-cin.png'
import blight from '../assets/background-light.png'
import bdark from '../assets/background-dark.png'

const Arranjos = ({ theme, setTheme }) => {
  return (
    <>
      <div className='arranjos'>
        <div className='container'>

          <div className='title'>
            <h1 className='text-css'>ARRANJOS</h1>
            <p className='text-p-css'>Arranjos florais transformam casas, escritórios e recepções em ambientes mais encantadores.</p>
          </div>

          <div className='div-cards'>

            <div className="cards">

              <div className='card'>

                <div className='card-image'>
                  <img src={arr_um} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>ARRANJO SANTO ANTÔNIO</h1>
                </div>

              </div>


              <div className='card'>

                <div className='card-image'>
                  <img src={arr_dois} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>ARRANJO LAGOA-CONCEIÇÃO</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={arr_tres} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>ARRANJO BARRA DA LAGOA</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={arr_qua} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>ARRANJO GRAVATÁ</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={arr_cin} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>PLANTA NAUFRAGADOS</h1>
                </div>

              </div>
            </div>
          </div>

          <div className='div-button'>
          <Link to='/telaarranjos'><button className='button-css'>VER MAIS</button></Link>


          </div>

        </div>


      </div>
    </>
  )
}

export default Arranjos

