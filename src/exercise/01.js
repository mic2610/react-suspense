// Simple Data-fetching
// 💯 make more generic createResource
// http://localhost:3000/isolated/final/01.extra-2.js

import * as React from 'react'
import {fetchPokemon, PokemonDataView, PokemonErrorBoundary, PokemonInfoFallback} from '../pokemon';
import {createResource, } from '../utils';

let pokemonName = 'pikachu';
let pokemonResource = createResource(fetchPokemon(pokemonName));

function InfoFallback({pokemonName}) {
    return <PokemonInfoFallback name={pokemonName} />
}

function PokemonInfo() {
  const pokemon = pokemonResource.read();

  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
        <PokemonErrorBoundary>
          <React.Suspense fallback={InfoFallback({pokemonName})}>
            <PokemonInfo />
          </React.Suspense>
        </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App