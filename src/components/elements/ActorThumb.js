import React from 'react';
import { Link } from '@reach/router'
import { StyledMovieThumb } from '../styles/StyledMovieThumb'
import { StyledActorThumb } from '../styles/StyledActorThumb'
import NoImage from '../images/no_image.jpg'
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config'

import PropTypes from 'prop-types';


const ActorThumb = ({ actorId, actor, movieId, image, clickable }) => {
	//console.log(actor)

  return (
    <>

			{clickable ? (
			<StyledActorThumb>
				<Link to={`/${movieId}/${actor.id}`} >
					<img 
					className="clickable"
					src={image}
					alt="actorThumb"
				/>
				</Link>
				<span className="actor-name">{actor.name}</span>
				<span className="actor-character">{actor.character}</span>	
			</StyledActorThumb>
			 ):
			 <StyledActorThumb>
					<img 
						src={image}
						alt="actorThumb"
					/>
				</StyledActorThumb>
			}
	
			
      {/* {clickable ? (
        <Link to={`/${actorId}`} >
          <img
            className="clickable"
            src={image}
            alt="actor-thumb"       
          />      
        </Link>
      ) : (
        <img
          src={image}
          alt="actor-thumb"     
        />
      )
    } */}
    </>
  );
}

export default ActorThumb;
