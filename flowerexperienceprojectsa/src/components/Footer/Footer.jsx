import React from 'react'
import './Footer.css'
import insta_light from '../../assets/insta-light.png'
import insta_dark from '../../assets/insta-dark.png'
import face_dark from '../../assets/face-dark.png'
import face_light from '../../assets/face-light.png'
import lkd_dark from '../../assets/lkd-dark.png'
import lkd_light from '../../assets/lkd-light.png'



const Footer = ({ theme, setTheme }) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <footer className='footer-css'>
            <div className='footer-infos-div'>

            </div>

            <div className='footer-social-media-div'>
            <ul>
                <li>
                    <img src={theme == 'dark' ? insta_light : insta_dark} alt='' className='social-media-icon' />
                </li>
                <li>
                    <img src={theme == 'dark' ? face_light : face_dark} alt='' className='social-media-icon' />
                </li>
                <li>
                    <img src={theme == 'dark' ? lkd_light : lkd_dark} alt='' className='social-media-icon' />
                </li>
            </ul>
            </div>

            <p>
                <span>Flower Experience</span> &copy; 2024
            </p>

        </footer>
    )
}


export default Footer
