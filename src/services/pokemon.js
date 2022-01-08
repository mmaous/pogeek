import axios from 'axios';

export const getPokemonList = async () => {
  const res = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=150',
  );

  return res.data.results;

};

export const getPokemon = async (url) => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};

export default { getPokemon, getPokemonList };