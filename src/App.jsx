import { useState } from 'react';
import './css/App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {

  return (
    <>
      <Navbar />

      {/* BODY PAGE */}
      <section className='body-container'>
          <Home />
      </section>
    </>
  );
}

export default App;
