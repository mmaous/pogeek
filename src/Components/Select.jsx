import React from 'react';


const Select = (props) => {
  return (
    <div className='dropdown'>
      <select onChange={props.selected}>
        {props.children}
      </select>
    </div>
  );
};

export default Select;
