import axios from 'axios';

export const getPokemonList = async () => {
  const res = await axios.get('https://pokeapi.co/api/v2/pokemon-species?limit=100');

  return res.data.results;

};

export const getPokemon = async (id) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  return res.data;
};

export const getPokemonSpiritUrl = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

export default { getPokemonSpiritUrl, getPokemon, getPokemonList };