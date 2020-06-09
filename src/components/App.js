import React from 'react';
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyle'
import Header from './elements/Header'
import Footer from './elements/Footer'
import Home from './Home'
import Movie from './Movie'
import ActorComponent from './ActorComponent'

import NotFound from './NotFound'

const App = () => {

  return (
    <div>
			<Header />
      <Router>
			  <Home path="/" />
        <Movie path="/:movieId"/>
        <ActorComponent path="/:movieId/:actorId"/>
        <NotFound default />

      </Router>
			<GlobalStyle />
      <Footer />
    </div>
  );
}

export default App;
