import React, { useState } from 'react';
import './styles.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdLocalMovies } from "react-icons/md";import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!searchValue) {
      return;
    }

    navigate(`search?q=${searchValue}`, { replace: true });
    setSearchValue("");

  }

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link className="navbar-link-logo" to="/">
          <MdLocalMovies className="logo" />
          <h2>Movie Flix</h2>
        </Link>
      </div>
      <div className="navbar-input">
        <form onSubmit={handleSubmit}>
          <input
            className="navbar-input"
            type="search"
            placeholder="Busque um filme"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="navbar-button">
            <CiSearch size="20px" color="#666666" />
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
