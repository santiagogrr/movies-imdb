import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router'

import NoImage from '../images/no_image.jpg'
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config'
import { StyledActorCredits } from '../styles/StyledActorCredits'

const ActorCredits = ({ credit }) => {

  return (
    <StyledActorCredits>
			<Link to={`/${credit.id}`} >
				<img 
					src={credit.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${credit.poster_path}`: NoImage}
					alt="creditThumb"
				/>
			</Link>
			<span className="actor-name">{credit.title}</span>
			<span className="actor-character">{credit.character}</span>

    </StyledActorCredits>
  );
}

export default ActorCredits;