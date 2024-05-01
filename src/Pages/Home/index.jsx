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
    <div>
      {topMovies && topMovies.map((movie) => (
        <div key={movie.id}>
          <p className="title">{movie.title}</p>
        </div>

      ))}
    </div>
  )
}

export default Home;