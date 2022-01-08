import React from 'react';

const Card = ({ poki }) => {
  console.log(typeof poki);
  // console.log(poki.hasOwnProprety('official-artwork'));
  return (
    <div>
      {!poki ? (
        'select a pokémon'
      ) : (
        <div>
          {poki.name}
        </div>
      )}
    </div>
  );
};

export default Card;
