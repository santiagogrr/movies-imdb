import React from 'react';
import { Spinner, ActorCredits, ActorInfo, ActorInfoBar, NavigationActor, Grid } from './elements'
import { useMovieFetch } from './hooks/useMovieFetch'
import { useActorFetch } from './hooks/useActorFetch'

const ActorComponent = ({actorId, movieId}) => {
  const [ actor, loading, error ] = useActorFetch(actorId);
  const [ movie ] = useMovieFetch(movieId);

  console.log(actor);

  if(error) {
    return <div>Something went wrong...</div>
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <NavigationActor actor={actor.name} movie={movie} />
      <ActorInfo
        actor={actor}   
      />
      <ActorInfoBar
        actor={actor} 
      />
      <Grid header= "Movie Credits">
        {actor.credits.map((credit) => (
          <ActorCredits 
          key={credit.credit_id} credit={credit} />
        ))}
  
      </Grid>

    </div>
  );
}

export default ActorComponent;
