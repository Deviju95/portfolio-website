import React from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';

import Resume from '../assets/Justin Jang_Resume.pdf';
import { projectData } from '../data/project-data';
import ProjectCard from './ProjectCard';

const Programming = () => {
  return (
    <>
      <Row className='pb-5 pt-5' id='programming'>
        <Col md={12}>
          {/* Intro */}
          <Col>
            <p>programming</p>
            <h1>
              <mark>
                It's been a while since I started counting from &nbsp;"0"
              </mark>
            </h1>
            <p>
              <small>
                I am a programmer. I adore moments when I find that one last
                semi-colon to clear all the errors and finally make things
                running again.
              </small>
            </p>
          </Col>
          {/* Full Resume Button */}
          <Col className='mt-4'>
            <a
              className='btn btn-outline-primary btn-sm'
              href={Resume}
              target='_blank'
              rel='noreferrer'
              area-label='Resume'
            >
              View full CV
            </a>
          </Col>
          {/* Short Resume */}
          <Col className='mt-4'>
            {/* <h6 className='mt-4'>Work Experience</h6>
            <ul className='list_style link_hover'>
              <li>
                <small>
                  <a href='/' target='_blank' rel='noreferrer'>
                    _____
                  </a>
                  :: role
                  <small className='text-muted'>, Date -</small>
                </small>
              </li>
            </ul> */}
            <h6 className='mt-4'>Achievements</h6>
            <ul className='list_style link_hover'>
              <li>
                <small>
                  <a
                    href='https://socalkgroup.org/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    SoCal K-Group Hackathon
                  </a>
                  :: Gold Coin
                  <small className='text-muted'>, 2021.11</small>
                </small>
              </li>
            </ul>
          </Col>
          {/* Project Cards */}
          <Col className='mt-4'>
            <h6 className='mb-3'>projects</h6>
            <Row sm={2} md={2} lg={2} xl={3} className='g-4'>
              {projectData.map((project) => (
                <CardGroup key={project.id}>
                  <ProjectCard project={project} />
                </CardGroup>
              ))}
            </Row>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default Programming;
