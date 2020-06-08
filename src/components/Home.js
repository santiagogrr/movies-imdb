import React, { useState } from 'react';
import {Hero, SearchBar, Grid, MovieThumb, Spinner, LoadMoreBtn} from './elements'
import {POPULAR_BASE_URL, SEARCH_BASE_URL, POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config'
import { useHomeFetch } from './hooks/useHomeFetch'
import NoImage from './images/no_image.jpg'

const Home = () => {

  const [{ state, loading, error}, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);

    fetchMovies(endpoint);

  }

  const loadMoreMovies = () => {
    // const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${state.currentPage + 1}`;
    // const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${state.currentPage + 1}`;
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${state.currentPage + 1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${state.currentPage + 1}`;


    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  }


  if(!state.movies[0]){
    return <Spinner />
  }

  if(error){
    return <div>Something went wrong...</div>
  }



  return (
    <div>
        {!searchTerm &&
          (<Hero 
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
            title={state.heroImage.original_title}
            text={state.heroImage.overview}
          
          />)
        }
        <SearchBar 
          callback = {searchMovies}
        
        />
        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
          {state.movies.map((movie) => (
            <MovieThumb
              key={movie.id}
              clickable
              image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage }
              movieId={movie.id}
              movieName={movie.original_title}        
            />
          ))}
        </Grid>
        {loading ? <Spinner /> : null}
        {state.currentPage < state.totalPages && !loading && (
          <LoadMoreBtn 
            text='Load More'
            callback={loadMoreMovies}        
          />
        )}
    </div>
  );
}

export default Home;
