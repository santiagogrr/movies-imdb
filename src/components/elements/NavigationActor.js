import React from 'react';
import { Link } from '@reach/router'
import { StyledNavigation } from '../styles/StyledNavigation'
import PropTypes from 'prop-types';


const Navigation = ({ actor, movie }) => {

  return (
    <StyledNavigation>
      <div className="navigation-content">
        <Link to ="/">
          <p>Home</p>
        </Link>
        <p>|</p>
        <Link to ={`/${movie.id}`}>
          <p>{movie.title}</p>
        </Link>
        <p>|</p>
        <p>{actor}</p>

      </div>
    </StyledNavigation>
  );
}


export default Navigation;
