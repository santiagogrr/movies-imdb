import React from 'react';
import FontAwesome from 'react-fontawesome'
import { StyledActorInfoBar } from '../styles/StyledActorInfoBar'
import PropTypes from 'prop-types';

const ActorInfoBar = ({actor}) => {

  return (
    <StyledActorInfoBar>
      <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-birthday-cake" name="clock-o" size="2x" />
          <span className="movieinfobar-info"> Birthday: {new Date(actor.birthday).toLocaleDateString()} </span>
        </div>

        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-map-pin" name="clock-o" size="2x" />
          <span className="movieinfobar-info"> Place of Birth: {actor.place_of_birth}</span>
        </div>

      </div>
    </StyledActorInfoBar>
  );
}


export default ActorInfoBar;
