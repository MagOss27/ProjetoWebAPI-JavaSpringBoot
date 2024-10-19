import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo_light from '../../assets/logo_white.png';
import logo_dark from '../../assets/logo_black.png';
import search_icon_light from '../../assets/search_w.png';
import search_icon_dark from '../../assets/search_b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';
import user_dark from '../../assets/user_dark.png';
import user_light from '../../assets/user_light.png';

const Navbar = ({ theme, setTheme, isLoggedIn, isAdmin, handleLogout }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggle_mode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogoutClick = () => {
        handleLogout(); // Chama a função de logout
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <div className='navbar'>
            <Link to='/'><img src={theme === 'dark' ? logo_light : logo_dark} alt='' className='logo' /></Link>
            <ul>
                <Link to='/' className='text_navbar'>HOME</Link>
                <Link to='plantas' className='text_navbar'>PLANTAS</Link>
                <Link to='desidratadas' className='text_navbar'>DESIDRATADAS</Link>
                <Link to='arranjos' className='text_navbar'>ARRANJOS</Link>
                <Link to='orquideas' className='text_navbar'>ORQUÍDEAS</Link>
                {isAdmin && <Link to='adm' className='text_navbar'>ADM</Link>}
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Procurar' />
                <img src={theme === 'dark' ? search_icon_dark : search_icon_light} alt='' />
            </div>

            <img onClick={toggle_mode} src={theme === 'dark' ? toggle_light : toggle_dark} alt='' className='toggle-icon' />

            <div className='user-icon' onClick={toggleDropdown}>
                <img src={theme === 'dark' ? user_light : user_dark} alt='' className='user-icon' />
            </div>

            {dropdownOpen && (
                <div className='dropdown-menu'>
                    {JSON.parse(localStorage.getItem('isLoggedIn') === 'true') ? (
                        <>
                            <Link to='usuario' className='dropdown-item'>Perfil</Link>
                            <div className='dropdown-item' onClick={handleLogoutClick} style={{ cursor: 'pointer' }}>Sair</div>
                        </>
                    ) : (
                        <>
                            <Link to='login' className='dropdown-item-log'>Login</Link>
                            <Link to='cadastro' className='dropdown-item'>Cadastrar</Link>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;

