import React from 'react';
import { Col, Row } from 'react-bootstrap';

const GraphicDesign = () => {
  return (
    <>
      <Row className='pt-5 pb-5' id='graphic_design'>
        <Col md={8}>
          {/* Intro */}
          <Col>
            <p>graphic design</p>
            <h1>
              <mark>Explore designs to capture innovative eyes</mark>
            </h1>
            <p>
              <small>
                I explore, create, and suggest visual graphics of different
                mediums to grab attention of those looking for creative and
                effective solutions.
              </small>
            </p>
          </Col>
          {/* Design Website Button */}
          {/* <Col className='mt-4'>
              <a
                className='btn btn-outline-primary btn-sm'
                href='https://jangju99.wixsite.com/mysite'
                target='_blank'
                rel='noreferrer'
                area-label='Resume'
              >
                View More Works
              </a>
            </Col> */}

          {/* Works */}
          <Col className='mt-40'>
            <h4 className='mt-4 ps-4'>Works</h4>
            <ul className='list_style link_hover'>
              {/* <li>
                  <small>
                    <a href='/' target='_blank' rel='noreferrer'>
                      Title
                    </a>
                    :: What
                    <small className='text-muted'>, when</small>
                  </small>
                </li> */}
              <li>
                <small>
                  <a
                    href='https://www.pattersonreckinger.com/getty-unshuttered-2019'
                    target='_blank'
                    rel='noreferrer'
                  >
                    The Getty Unshuttered Project
                  </a>
                  :: Kinetic Typograpy
                  <small className='text-muted'>
                    , Project Participant / 2020
                  </small>
                </small>
              </li>
              <li>
                <small>
                  <a
                    href='https://www.usctrojanesports.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    USC Trojan Esports Union
                  </a>
                  :: Poster, Banner Design
                  <small className='text-muted'>
                    , Student Graphic Designer / 2019
                  </small>
                </small>
              </li>
              <li>
                <small>
                  <a
                    href='https://sfi.usc.edu/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    USC Shoah Foundation
                  </a>
                  :: Web UI, Template design
                  <small className='text-muted'>
                    , Graphic Design Intern / 2019
                  </small>
                </small>
              </li>
              <li>
                <small>
                  Personal projects in web design, motion graphics, product
                  design, and fine art
                </small>
              </li>
            </ul>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default GraphicDesign;
