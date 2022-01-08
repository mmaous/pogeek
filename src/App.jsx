import React, { useEffect, useState } from 'react';
import { getPokemon, getPokemonList } from './services/pokemon';
import Card from './Components/Card';
import Select from './Components/Select';

const App = () => {
  const [choosen, setChoosen] = useState(
    'https://pokeapi.co/api/v2/pokemon/1/',
  );
  const [fetched, setFetched] = useState({});

  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList()
      .then((results) => {
        setPokemonList(results);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(pokemonList);

  useEffect(() => {
    getPokemon(choosen)
      .then((results) => {
        setFetched(results);
      })
      .catch((err) => console.error(err));
  }, [choosen]);

  const handleSelection = (e) => setChoosen(e.target.value);

  return (
    <div>
      {pokemonList.length === 0 ? (
        'all pokemons escape'
      ) : (
        <div className='app'>
          <Select selected={handleSelection}>
            {pokemonList.map((pokemon, idx) => (
              <option key={idx} value={pokemon.url}>
                {pokemon.name}
              </option>
            ))}
          </Select>
          <Card poki={fetched}/>
        </div>
      )}
    </div>
  );
};

export default App;
