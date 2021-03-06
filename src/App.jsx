import React, { useEffect, useState } from 'react';
import { getPokemon, getPokemonList } from './services/pokemon';

import Card from './Components/Card';
import Select from './Components/Select';

const App = () => {
  const [currentPokemon, setCurrentPokemon] = useState(1);
  const [fetched, setFetched] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [isFirst, setIsFirst] = useState(true);
  const [isLast, setIsLast] = useState(false);


  useEffect(() => {
    getPokemonList()
      .then((results) => {
        setPokemonList(results);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getPokemon(currentPokemon)
      .then((results) => {
        setFetched(results);
      })
      .catch((err) => console.error(err));
  }, [currentPokemon]);

  const handleSelection = (selected) => {
    console.log(selected);
    setCurrentPokemon(Number(selected.value.slice(42, -1)));
  };

  const handlePrevious = () => {
    if (currentPokemon > 1) {
      setCurrentPokemon(currentPokemon - 1);
      setIsFirst(false);
      setIsLast(false);
    }
    else setIsFirst(true);
  };
  const handleNext = () => {
    if (currentPokemon < pokemonList.length) {
      setCurrentPokemon(currentPokemon + 1);
      setIsLast(false);
      setIsFirst(false);
    } else setIsLast(true);
  };

  const options = pokemonList.map((pokemon) => {
    // console.log(pokemon);
    return { value: pokemon.url, label: pokemon.name };
  });

  console.log(options);
  return (
    <div className='app'>
      {pokemonList.length === 0 ? (
        <div style={{ padding: '5rem' }}>loading pokemons...</div>
      ) : (
        <>
          <div className='select-dropdown'>
            <Select
              options={options}
              defaultValue={'Select a Pokémon : '}
              onChange={handleSelection}
            />
          </div>
          <div className='card-view'>
            <Card pokemon={fetched} />
            <div className='pagination'>
              <button
                className={isFirst ? 'btn-disabled' : ''}
                name='previous'
                onClick={handlePrevious}>
                Previous
              </button>
              <button
                className={isLast ? 'btn-disabled' : ''}
                name='next'
                onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
