import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#home'>Projects</Nav.Link>
              <Nav.Link href='#link'>Contact</Nav.Link>
              <i class='fa-brands fa-github'></i>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href='/'>
            <p style={{ fontFamily: 'JustinFont' }}>JANG</p>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
