import React from 'react';
import PokemonIndexContainer from './pokemon/pokemon_index_container';

const App = ({ store }) => (
  <div>
    <h1>App</h1>
    { console.log(store) }
    <PokemonIndexContainer />
  </div>
);

export default App;
