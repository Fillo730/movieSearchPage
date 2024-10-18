import React, { useState } from 'react';
import fetchMovies from './API/FetchMovies';
import Movie from './Movie';
import './App.css'

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [movies, setMovies] = useState([]);

  function handleChange(e) {
    setInputSearch(e.target.value);
  }

  async function handleFetchData() {
    try {
      const moviesData = await fetchMovies(inputSearch);
      setMovies(moviesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  return (
    <>
      <div className='app-title'>
        <h1 className='app-title-heading'>MovieSearchPage</h1>
        <p className='app-title-text'>Digit the movie's name you want to search</p>
      </div>
      <div className='app-input'>
        <label className="app-input-label-inputText" htmlFor='inputMovie'>Enter movie's name</label>
        <input 
          className="app-input-inputText" 
          type="text" 
          value={inputSearch} 
          onChange={handleChange}
        />
        <button className="app-input-button" onClick={handleFetchData}>Search</button>
      </div>
      <div className='app-moviesList'>
        <h1 className='app-movieList-heading'>Movies List</h1>
        <ul className='app-movieList-ul'>
          {movies.map((movie) => (
            <li className='app-movieList-ul-li' key={movie.id}>
              <Movie 
                title={movie.title} 
                overview={movie.overview} 
                vote={movie.vote_average} 
                releaseDate={movie.release_date} 
                img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
