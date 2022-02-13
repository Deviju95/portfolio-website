import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='py-3'>
            Justin K. Jang <br />
            &copy; 2021 - 2022
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
