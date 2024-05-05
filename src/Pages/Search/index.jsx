import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../../Components/Card';
import './style.css'

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchMoviwes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;

    getSearchMoviwes(searchWithQueryUrl);
  }, [query]);

  return (
    <div className="search-container">
      <h2 className="search-title">Resultados encontrados para: <span className="query-text">{query}</span></h2>
      <div className="search-movies">
        {movies.length === 0 && (
          <p className="search-loading">Carregando...</p>
        )}
        {movies.length > 0 && (
          movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </div>
  )
}

export default Search;