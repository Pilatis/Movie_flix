import React, { useState, useEffect } from 'react';
import './styles.css';
import Card from '../../Components/Card';

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  }

  useEffect(() => {

    const topRatedUrl = `${moviesUrl}top_rated?${apiKey}`;
    
    getTopRatedMovies(topRatedUrl)
  }, [])

  return (
    <div className="home-container">
      <h2 className="home-title">Melhores filmes</h2>
      <div className="home-movies-container">
        {topMovies.length === 0 && <h2>Carregando...</h2>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default Home;