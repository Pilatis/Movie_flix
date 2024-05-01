import React from 'react';
import './styles.css';
import { MdLocalMovies } from "react-icons/md";import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <MdLocalMovies className="logo" />
        <h2>Movie Flix</h2>
      </div>
      <div className="navbar-input">
        <input className="navbar-input" type="search" placeholder="Busque um filme" />
        <button className="navbar-button">
          <CiSearch size="20px" color="#666666" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
