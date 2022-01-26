import React from 'react';
import SelectReact from 'react-select';

const Select = (props) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted rgba(100, 100, 111, 0.2)',
      color: state.isSelected ? 'rgba(100, 100, 111, 0.2)' : 'black',
      borderRadius: 0,
      background: 'transparent',
      '&:hover': {
        background: 'black',
        color: 'white',
      },
    }),
    control: (base, state) => ({
      ...base,
      boxShadow: '#BFAFB2',
      border: state.isFocused ? '2px solid black' : '1px solid black',
      '&:hover': {
        border: '2px solid black',
      },
      background: 'transparent',
    })
  };
  return (
    <div className='select-dropdown'>
      <label style={{ fontSize: '.8rem', textAlign: 'left' }}>
        <em>Select a Pokémon : </em>
      </label>
      <SelectReact
        options={props.options}
        defaultValue={'Select a Pokémon : '}
        onChange={props.onChange}
        styles={customStyles}
      />
    </div>
  );
};

export default Select;
