import React, { useState } from 'react';

const ImageCarousel = ({ project }) => {
  const [imageNumber, setImageNumber] = useState(0);

  const imageClickHandler = () => {
    if (imageNumber === project.images.length - 1) {
      setImageNumber(0);
    } else {
      setImageNumber(imageNumber + 1);
    }
  };

  const prevButtonClick = () => {
    if (imageNumber === 0) {
      setImageNumber(project.images.length - 1);
    } else {
      setImageNumber(imageNumber - 1);
    }
  };
  const nextButtonClick = () => {
    if (imageNumber === project.images.length - 1) {
      setImageNumber(0);
    } else {
      setImageNumber(imageNumber + 1);
    }
  };

  return (
    <div className='project__image-section-container'>
      <div className='project__image-wrapper'>
        <img
          src={project.images[imageNumber]}
          alt={`${project.id}`}
          className='project__image'
          onClick={imageClickHandler}
        />
      </div>
      <div className='project__btn-wrapper'>
        <button className='btn btn-secondary' onClick={prevButtonClick}>
          &lt;
        </button>
        <h6>
          {imageNumber + 1} / {project.images.length}
        </h6>
        <button className='btn btn-secondary' onClick={nextButtonClick}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
