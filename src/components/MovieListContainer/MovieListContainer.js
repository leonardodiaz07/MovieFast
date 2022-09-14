import React from 'react'
import { useState , useEffect} from 'react'
import './MovieListContainer.css'
import Crd from '../Crd/Crd'


const MovieListContainer = () => {
 const [ movieList, setMovielist] = useState(null)
 
 useEffect(()=> {
   
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=ee7efdac3805908e26ccd569940fef64')
    .then((res) => res.json())
    .then ((data)=> {

        setMovielist(data.results)
    })

    .catch((err) => console.log(err))
 } , [])



  return (

   <div className=' movieContainer'>
    {   
        movieList?.map( movie=> {
            return <Crd movie={movie} key={movie.id} />

        })
    } 
 
   </div>
  );
}

export default MovieListContainer;