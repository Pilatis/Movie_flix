import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { MdLocalMovies } from "react-icons/md";import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link className="navbar-link-logo" to="/">
        <MdLocalMovies className="logo" />
        <h2>Movie Flix</h2>
        </Link>
      </div>
      <div className="navbar-input">
        <input className="navbar-input" type="search" placeholder="Busque um filme" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
        <button className="navbar-button">
          <CiSearch size="20px" color="#666666" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
