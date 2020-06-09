import React from 'react';
import NoImage from '../images/no_image.jpg'
import { IMAGE_BASE_URL, POSTER_SIZE} from '../../config'
import MovieThumb from './MovieThumb'
import { StyledMovieInfo } from '../styles/StyledMovieInfo'
import PropTypes from 'prop-types';

const MovieInfo = ({ movie }) => {

  return (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieThumb 
            image = {
              movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`: NoImage
            }
            clickable= {false}
          
          />
        </div>
        <div className="movieinfo-text">
          <h1>{movie.title}</h1>
          <h3>SYNOPSIS</h3>
          <p>{movie.overview}</p>

          <h3>RELEASE DATE</h3>
          <p>{new Date(movie.release_date).toDateString()}</p>
        

          <div className="rating-director">
            <div>
              <h3>IMDB RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
              {movie.directors.map((e) => (
                <p key={e.credit_id}>{e.name}</p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </StyledMovieInfo>
  );
}

MovieInfo.propTypes = {
	movie: PropTypes.object,
}

export default MovieInfo;
