import React from 'react';
import { StyledHeroImage } from '../styles/StyledHeroImage'
import PropTypes from 'prop-types';


const Hero = ({title, text, image}) => {

  return (
    <StyledHeroImage image={image}>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>

      </div>
    </StyledHeroImage>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
}

export default Hero;
