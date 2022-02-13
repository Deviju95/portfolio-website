import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import Submitted from './pages/Submitted';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          {/* router-dom V6:: 'Switch' is replaced by 'Routes' */}
          <Routes>
            {/* router-dom V6:: 'Route' format changed */}
            <Route path='/' element={<Home />} />
            <Route path='/submitted' element={<Submitted />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
