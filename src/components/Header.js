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
              <Nav.Link className='nav-item' to='/'>
                <Link to='programming'>Programming</Link>
              </Nav.Link>
              <Nav.Link className='nav-item' href='/'>
                <Link to='graphic_design'>Graphic Design</Link>
              </Nav.Link>
              <Nav.Link className='nav-item'>
                <Link to='contact'>Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
