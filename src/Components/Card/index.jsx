import React from 'react'
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';
import './styles.css';

const imageUrl = import.meta.env.VITE_IMG;

const Card = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img
        className="movie-card-image"
        src={imageUrl + movie.poster_path}
        alt={movie.title}
      />
      <h2 className="movie-card-title">{movie.title}</h2>
      <p className="movie-card-vote">
        <FaStar className="star-vote" />
        {movie.vote_average}
      </p>
      {showLink && (
        <Link className="movie-card-link" to={`/movie/${movie.id}`}>
          Detalhes
        </Link>
      )}
    </div>
  );
};

export default Card;
