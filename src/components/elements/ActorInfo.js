import React from 'react';
import NoImage from '../images/no_image.jpg'
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config'
import ActorThumb from './ActorThumb'
import { StyledMovieInfo } from '../styles/StyledMovieInfo'
import PropTypes from 'prop-types';

const ActorInfo = ({ actor }) => {
    //console.log(actor)

  return (
    <StyledMovieInfo >
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <ActorThumb 
            image = {
              actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`: NoImage
            }
            clickable= {false}   
            actor= {actor}      
          />
        </div>

        <div className="movieinfo-text">
          <h1>{actor.name}</h1>
          <h3>Overview</h3>
          <p>{actor.biography}</p>

          <div className="rating-director">
            {/* <div>
              <h3>IMDB RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div> */}
            {/* <div className="director">
              <h3>BIRTHDAY</h3>
              <p>{actor.birthday}</p>
            </div>
            <div className="director">
              <h3>PLACE OF BIRTH</h3>
              <p>{actor.place_of_birth}</p>
            </div> */}
          </div>
        
        </div>

      </div>
    </StyledMovieInfo>
  );
}

export default ActorInfo;
