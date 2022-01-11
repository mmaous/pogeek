import React from 'react';


const Select = (props) => {
  return (
    <div className='select-dropdown'>
      <select defaultValue={'rrr'} onChange={props.selected}>{props.children}</select>
    </div>
  );
};

export default Select;
