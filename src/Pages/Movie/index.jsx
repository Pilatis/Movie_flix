import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsWalletFill,
} from 'react-icons/bs';
import Card from '../../Components/Card';
import './style.css'

const moviesUrl = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async(url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  }

  useEffect(() => {
   const movieUrl = `${moviesUrl}${id}?${apiKey}`
   getMovie(movieUrl)

  }, []);

  const formatCurrency = (number) => {
    return number.toLocaleString("es-US", {
      style: "currency",
      currency: "USD",
    })
  }
  return (
    <div className="container-movie">
      {movie && (
        <>
          <Card movie={movie} showLink={false} />
          <div className="container-info">
          <p className="tag-line">{movie.tagline}</p>
          <div className="movie-info">
            <h3>
              <BsWallet2 />
              Orçamento
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="movie-info">
            <h3>
              <BsGraphUp />
              Receita
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="movie-info">
            <h3>
              <BsHourglassSplit />
              Duração
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="movie-info">
            <h3>
              <BsWalletFill />
              Descrição
            </h3>
            <p>{movie.overview}</p>
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Movie;
