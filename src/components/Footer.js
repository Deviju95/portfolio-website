import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='py-3'>
            <h6>
              &copy;2021-2022 <br />
              <small>
                Justin K. Jang <br />
                All rights reserved.
              </small>
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
