import React from 'react'
import './Navbar.css'
import {  Link } from 'react-router-dom';
import logo_light from '../../assets/logo_white.png'
import logo_dark from '../../assets/logo_black.png'
import search_icon_light from '../../assets/search_w.png'
import search_icon_dark from '../../assets/search_b.png'
import toogle_light from '../../assets/night.png'
import toogle_dark from '../../assets/day.png'
import user_dark from '../../assets/user_dark.png'
import user_light from '../../assets/user_light.png'
import favorite_dark from '../../assets/favorite_dark.png'
import favorite_light from '../../assets/favorite_light.png'



const Navbar = ({theme,setTheme}) => {

const toggle_mode = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <div className='navbar'>
        <Link to='/'><img src={theme == 'dark' ? logo_light : logo_dark} alt='' className='logo'/></Link>
        <ul>
            <Link to='/' className='text_navbar'> HOME</Link>
            <Link to='plantas' className='text_navbar'> PLANTAS</Link>
            <Link to='desidratadas'className='text_navbar'> DESITRATADAS</Link>
            <Link to='arranjos' className='text_navbar'> ARRANJOS</Link>
            <Link to='orquideas' className='text_navbar'> ORQUÍDEAS</Link>
            <Link to='adm' className='text_navbar'>ADM</Link>
            <Link to='login' className='text_navbar'>LOGIN</Link>
            <Link to='cadastro' className='text_navbar'>CADASTRO</Link>
        </ul>

        <div className='search-box'>
            <input type="text" placeholder='Procurar'/>
            <img src={theme == 'dark' ? search_icon_dark : search_icon_light} alt=''/>
        </div>

        <img onClick={() => {toggle_mode()}}src={theme == 'dark' ? toogle_light : toogle_dark} alt='' className='toggle-icon'/>
        <Link to='usuario'><img src={theme == 'dark' ? user_light : user_dark} alt='' className='user-icon'/></Link>



    </div>
  )
}

export default Navbar
