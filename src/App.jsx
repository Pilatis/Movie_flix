import { useState } from 'react';
import './css/App.css';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <div className="body-container">
          {/* BODY PAGE */}
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
