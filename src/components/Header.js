import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <Navbar expand='lg' collapseOnSelect bg='light'>
        <Container className='container'>
          <Navbar.Brand href='/' style={{ fontFamily: 'JustinFont' }}>
            Jang
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navlinks' />

          <Navbar.Collapse id='navlinks'>
            <Nav className='me-auto'>
              <Link className='nav-link nav-item' to='programming'>
                Programming
              </Link>
              <Link className='nav-link nav-item' to='graphic_design'>
                Graphic Design
              </Link>
              <Link className='nav-link nav-item' to='contact'>
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
