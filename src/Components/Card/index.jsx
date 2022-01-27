import React from 'react';
import { getPokemonSpiritUrl } from '../../services/pokemon';


const Card = ({ pokemon }) => {
  if (!pokemon) return <div>choose a pokemon</div>;

  const description = pokemon.flavor_text_entries[0].flavor_text.replace(
    /[\n\f]/g,
    ' ',
  );
  return (
    <div className='card'>
      <h2 className='name'>{pokemon.name}</h2>
      <div className='pokemon-spirit'>
        <img  src={getPokemonSpiritUrl(pokemon.id)} />
      </div>
      <div className='pokemon-description'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
