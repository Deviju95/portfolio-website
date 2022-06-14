import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Container>
          <Col md={8}>
            {/* router-dom V6:: 'Switch' is replaced by 'Routes' */}
            <Routes>
              {/* router-dom V6:: 'Route' format changed */}
              <Route path='/' element={<Home />} />
            </Routes>
          </Col>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
