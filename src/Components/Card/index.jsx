import React from 'react';
import styled from 'styled-components';
import { getPokemonSpiritUrl } from '../../services/pokemon';

const CardEle = styled.div``;

const Card = ({ pokemon }) => {
  if (!pokemon) return <div>choose a pokemon</div>;

  const description = pokemon.flavor_text_entries[0].flavor_text.replace(
    /[\n\f]/g,
    ' ',
  );
  return (
    <CardEle className='card'>
      <h2 style={{ textAlign: 'center', margin: '2rem 0' }}>{pokemon.name}</h2>
      <div className='pokemon-spirit'>
        <img  src={getPokemonSpiritUrl(pokemon.id)} />
      </div>
      <div className='pokemon-description'>
        <p>{description}</p>
      </div>
    </CardEle>
  );
};

export default Card;
