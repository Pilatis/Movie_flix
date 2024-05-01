import React, { useState, useEffect } from 'react';
import './styles.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  }

  useEffect(() => {

    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    
    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className="home-container">
      <h2 className="home-title">Melhores filmes</h2>
      <div className="home-movies-container">
        {topMovies.length === 0 && <h2>Carregando...</h2>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <div key={movie}>
              <h2>{movie.title}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;