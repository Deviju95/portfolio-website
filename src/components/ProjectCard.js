import React from 'react';
import { IoCodeOutline } from 'react-icons/io5';
import { IoMdGlobe } from 'react-icons/io';

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className='card'>
        <div className='card-body project_card_body'>
          <h4>{project.title}</h4>

          <h6 className='card-subtitle mb-2 text-muted'>
            <small>{project.subtitle}</small>
          </h6>

          <p className='card-text'>{project.description}</p>
          <div className='card_link'>
            {project.inDevelopment ? (
              <div className='icons_wrapper'>
                <a href={project.github} target='_blank' rel='noreferrer'>
                  &thinsp;
                  <IoCodeOutline />
                  &thinsp;
                </a>
                <span>
                  developing <IoMdGlobe />
                </span>
              </div>
            ) : (
              <div className='icons_wrapper'>
                <a href={project.github} target='_blank' rel='noreferrer'>
                  &thinsp;
                  <IoCodeOutline />
                  &thinsp;
                </a>
                <a href={project.website} target='_blank' rel='noreferrer'>
                  &thinsp;
                  <IoMdGlobe />
                  &thinsp;
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
