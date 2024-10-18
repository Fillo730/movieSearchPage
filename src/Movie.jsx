import React from 'react';
import './Movie.css'

function Movie({ title, overview, vote, releaseDate, img }) {
  return (
    <div className='movie-container'>
        <h3 className='movie-title'>{title}</h3>
        <p className='movie-info'>Release Date: {releaseDate} - Vote: {vote}</p>
        <p className='movie-overview'>{overview}</p>
        <img className='movie-image' src={img} alt={title}/>
    </div>
  );
}

export default Movie;
