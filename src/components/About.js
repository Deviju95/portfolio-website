import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import profileImage from '../assets/profile-img.png';

const About = () => {
  return (
    <>
      <Row className='mb-5'>
        <Col>
          {/* Intro */}
          <Col>
            <p>about</p>
            <h1>
              <mark>
                Code +
                <br /> Wonderful
              </mark>
            </h1>
            <p className='lead'>
              I enjoy building interactive websites and
              <br />
              find pleasure in aesthetic designs.
            </p>
          </Col>
          {/* Profile Image */}
          <Col md={3} xs={4}>
            <Image fluid roundedCircle src={profileImage} alt='Profile Image' />
          </Col>
          {/* Profile */}
          <Col className='mt-4'>
            <h5>Justin K. Jang</h5>
            <p className='link_hover'>
              <small>
                Frontend Engineer
                {/* @
                <a href='/' target='_blank' rel='noreferrer'>
                  ______
                </a> */}
              </small>
              <br />
              <small>Graphic Design</small>
              <br />
              <small className='text-danger'>USC </small>
              <small>Bachelor's Degree '21</small>
              {/* <br />
              <small className='text-danger'>USC </small>
              <small>Roski School of Art&Design '21</small> */}
            </p>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default About;
