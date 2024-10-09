import React from 'react'
import './Desidratadas.css'
import {  Link } from 'react-router-dom';
import des_um from '../assets/des-um.png'
import des_dois from '../assets/des-dois.png'
import des_tres from '../assets/des-tres.png'
import des_qua from '../assets/des-qua.png'
import des_cin from '../assets/des-cin.png'
import blight from '../assets/background-light.png'
import bdark from '../assets/background-dark.png'

const Desidratadas = ({ theme, setTheme }) => {
  return (
    <>
      <div className='desidratadas'>
        <div className='container'>

          <div className='title'>
            <h1 className='text-css'>DESIDRATADAS</h1>
            <p className='text-p-css'>Plantas desidratadas são um toque especial que embeleza ambientes como casas, escritórios e recepções.</p>
          </div>

          <div className='div-cards'>

            <div className="cards">

              <div className='card'>

                <div className='card-image'>
                  <img src={des_um} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>SEMPRE VIVA INGLESES</h1>
                </div>

              </div>


              <div className='card'>

                <div className='card-image'>
                  <img src={des_dois} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>SEMPRE VIVA MOÇAMBIQUE</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={des_tres} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>SEMPRE VIVA SANTINHO</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={des_qua} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>SEMPRE VIVA BRAVA</h1>
                </div>

              </div>

              <div className='card'>

                <div className='card-image'>
                  <img src={des_cin} className='foto-plantas' />
                </div>

                <div className='card-title'>
                  <h1 className='nome-planta'>SEMPRE VIVA SANTA CRUZ</h1>
                </div>

              </div>
            </div>
          </div>

          <div className='div-button'>
          <Link to='/teladesidratadas'><button className='button-css'>VER MAIS</button></Link>
          </div>

        </div>


      </div>
    </>
  )
}

export default Desidratadas

