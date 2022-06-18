import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Row className='mb-4' id='about'>
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
          <div className='profile-img__wrapper'>
            <img
              src='/images/profile.jpg'
              alt='profile'
              className='profile-img'
            />
          </div>

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
