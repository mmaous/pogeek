import React, { useEffect, useState } from 'react';
import { getPokemon, getPokemonList } from './services/pokemon';

import Card from './Components/Card';
import Select from './Components/Select';
import styled from 'styled-components';

const Button = styled.button`
  background: white;
  padding: 0.3rem 0.6rem;
  margin: 1rem;
`;

const App = () => {
  const [currentPokemon, setCurrentPokemon] = useState(1);
  const [fetched, setFetched] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [choosen, setChoosen] = useState('bulbasaur');
  // const [isNextDisable, setIsNextDisable] = useState(false);
  // const [isPreviousDisable, setIsPreviousDisable] = useState(true);

  useEffect(() => {
    getPokemonList()
      .then((results) => {
        setPokemonList(results);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log('currentPokemon', currentPokemon);

  useEffect(() => {
    getPokemon(currentPokemon)
      .then((results) => {
        console.log('results', results);
        setFetched(results);
        setChoosen(fetched.name);
      })
      .catch((err) => console.error(err));
  }, [currentPokemon]);

  const handleSelection = (e) => {
    setCurrentPokemon(Number(e.target.value.slice(42, -1)));
  };

  const handlePrevious = () => {
    if (currentPokemon > 1) setCurrentPokemon(currentPokemon - 1);
  };
  const handleNext = () => {
    if (currentPokemon < pokemonList.length) setCurrentPokemon(currentPokemon + 1);
  };

  return (
    <div>
      {pokemonList.length === 0 ? (
        'loading pokemons...'
      ) : (
        <div className='app'>
          <Select value={choosen} selected={handleSelection}>
            {pokemonList.map((pokemon, idx) => (
              <option key={idx} value={pokemon.url}>
                {pokemon.name}
              </option>
            ))}
          </Select>
          <Card pokemon={fetched} />
          <div className='pagination'>
            <Button name='previous' onClick={handlePrevious}>
              Previous
            </Button>
            <Button name='next' onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
