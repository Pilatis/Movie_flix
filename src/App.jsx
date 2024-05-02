import { useState } from 'react';
import './css/App.css';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />

      {/* BODY PAGE */}
        <Outlet />
    </>
  );
}

export default App;
