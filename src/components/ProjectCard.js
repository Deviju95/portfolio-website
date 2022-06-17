import React from 'react';
import { Row } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <h1>{project.title}</h1>

          <h6 className='card-subtitle mb-2 text-muted mb-3'>
            <small>{project.subtitle}</small>
          </h6>

          {/* Project Body */}
          <Row xs={1} sm={1} md={1} lg={2} xl={2} className='g-4'>
            {/* Project Image Section */}
            <div>
              <ImageCarousel project={project} />
            </div>

            {/* Project Description Section */}
            <div className='project__description-wrapper'>
              {/* Description */}
              <div className='project__description'>{project.description}</div>

              <hr />

              {/* List Items */}
              <ul className='project__details-container'>
                {project.details.map((listItem) => (
                  <li key={listItem.title}>
                    <Row sm={1} md={2} className='project__details-wrapper'>
                      <h5 className='text-primary project__details-title'>
                        {listItem.title}
                      </h5>
                      <p className='link_hover project__details-content'>
                        {listItem.content}
                      </p>
                    </Row>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
