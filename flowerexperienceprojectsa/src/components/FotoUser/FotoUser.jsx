import React from 'react'
import './FotoUser.css'
import user_dark from '../../assets/user_dark.png'
import user_light from '../../assets/user_light.png'

const FotoUser = ({theme,setTheme}) => {

  return (
    <div className='foto-user'>
      <img src={theme == 'dark' ? user_light : user_dark} className='foto-user-css'/>
    </div>
  )
}

export default FotoUser
