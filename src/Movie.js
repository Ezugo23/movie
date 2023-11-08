
import React from 'react'


const Movie = ({movie}) => {
  return (
    <div className="movie">
    <p>{movie.Year}</p>
    <img src = {movie.Poster !== 'N/A' ?  movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>
    <span>{movie.Type}</span>
    <h2>{movie.Title}</h2>
  </div>
  )
}

export default Movie