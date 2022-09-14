import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (

    <div className='bar'>

      <div className='title'>
        <h1>MovieFast</h1>
      </div>

      <div className='links'>
        
      <Link className='en' to="/">Inicio</Link>
      <Link className='en' to="/contacto">Contacto</Link>
      <Link className='en' to="/peliculas">Peliculas</Link>


        

      </div>











    </div>



  )
}

export default Header