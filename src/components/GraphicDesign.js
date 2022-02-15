import React from 'react';
import { Col, Row } from 'react-bootstrap';

const GraphicDesign = () => {
  return (
    <>
      <>
        <Row className='pt-5 pb-5' id='graphic_design'>
          <Col md={12}>
            {/* Intro */}
            <Col>
              <p>graphic design</p>
              <h1>
                <mark>
                  Project-Final-fixed-
                  <br />
                  FINALFINAL.psd
                </mark>
              </h1>
              <p>
                <small>
                  I am a graphic designer. I digest what I see and create things
                  to be experienced.
                </small>
              </p>
            </Col>
            {/* Design Website Button */}
            <Col className='mt-4'>
              <a
                className='btn btn-outline-primary btn-sm'
                href='https://jangju99.wixsite.com/mysite'
                target='_blank'
                rel='noreferrer'
                area-label='Resume'
              >
                View More Works
              </a>
            </Col>
            {/* Works */}
            <Col className='mt-4'>
              <h6 className='mt-4'>Works</h6>
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
                      href='https://sfi.usc.edu/'
                      target='_blank'
                      rel='noreferrer'
                    >
                      USC Shoah Foundation
                    </a>
                    :: Graphic Design Intern
                    <small className='text-muted'>, 2019.06-2019.12</small>
                  </small>
                </li>
              </ul>
            </Col>
          </Col>
        </Row>
      </>
    </>
  );
};

export default GraphicDesign;
