import React from 'react';
import { Grid, Spinner, Actor, MovieInfo, MovieInfoBar, Navigation } from './elements'
import { useMovieFetch } from './hooks/useMovieFetch'


const Movie = ({movieId}) => {
  const [ movie, loading, error ] = useMovieFetch(movieId);
  console.log(movie);

  if(error) {
    return <div>Something went wrong...</div>
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navigation movie={movie.original_title}/>
      <MovieInfo
        movie={movie}      
      />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}    
      />
      <Grid header= "Actors">
        {movie.actors.map((actor) => (
          <Actor 
          key={actor.credit_id} actor={actor} />
        ))}
  
      </Grid>
    </div>
  );
}

export default Movie;
