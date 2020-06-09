import React from 'react';
import { Grid, Spinner, Actor, ActorThumb, MovieInfo, MovieInfoBar, Navigation } from './elements'
import {POPULAR_BASE_URL, SEARCH_BASE_URL, POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'
import NoImage from './images/no_image.jpg'
import { useMovieFetch } from './hooks/useMovieFetch'
import { useActorFetch } from './hooks/useActorFetch'



const Movie = ({movieId, actorId}) => {
  const [ movie, loading, error ] = useMovieFetch(movieId);

  if(error) {
    return <div>Something went wrong...</div>
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navigation movie={movie.title}/>
      <MovieInfo
        movie={movie}      
      />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}    
      />
      {/* <Grid header= "Actors">
        {movie.actors.map((actor) => (
          <Actor 
          key={actor.credit_id} actor={actor} />
        ))}
      </Grid> */}

      <Grid header={`Director${movie.directors.length > 1 ? 's' : ''}`}>
          {movie.directors.map((actor) => (
            <ActorThumb
              key={actor.credit_id}
              actor={actor}
              clickable
              movieId = {movieId}
              image={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : NoImage }
              //movieId={movie.id}
              // movieName={movie.original_title}        
            />
          ))}
        </Grid>

      <Grid header="Actors">
          {movie.actors.map((actor) => (
            <ActorThumb
              key={actor.credit_id}
              actor={actor}
              clickable
              movieId = {movieId}
              image={actor.profile_path ? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path : NoImage }
              //movieId={movie.id}
              // movieName={movie.original_title}        
            />
          ))}
        </Grid>

      
    </div>
  );
}

export default Movie;
