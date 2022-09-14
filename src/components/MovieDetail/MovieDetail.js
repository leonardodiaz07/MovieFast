import React from 'react'
import { useParams } from 'react-router-dom'
import { useState ,useEffect } from 'react'
import './MovieDetail.css'

const MovieDetail = () => {
    let {movieID} = useParams()
    const [movieDetail , setMovieDetail] = useState({})

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=ee7efdac3805908e26ccd569940fef64`)
        .then((res) => res.json())
        .then((data) => {

        setMovieDetail(data)
        })
        .catch((err) => console.log(err))
    }, [])
 
    console.log(movieDetail)

    return (
    
        
        <div className="movieDetail_card">
        <img className='imgPoster' alt={`${movieDetail.title} poster`} src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} />
            <div>
                <h3 className="movieDetail_title"> {movieDetail.title}</h3>
                <p className="movieDetail_overview">{movieDetail.overview}</p>
            </div>
        </div>
   





       
    

   
  )
}

export default MovieDetail