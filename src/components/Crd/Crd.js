import React from 'react'
import './Crd.css'
import { useNavigate } from 'react-router-dom'

const Crd = ({movie}) => {
  let navigate = useNavigate()

const handleNavigation = () =>{
  navigate(`detail/${movie.id}`)
}

  return (
    <div>
    
    <img className='movieImg' onClick={handleNavigation} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />


    </div>
   
  )
}

export default Crd