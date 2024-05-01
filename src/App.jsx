import { useState } from 'react';
import './css/App.css';
import Navbar from './Components/Navbar';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar />

      {/* BODY PAGE */}
      <section className='body-container'>
        <Outlet />
      </section>
    </>
  );
}

export default App;
