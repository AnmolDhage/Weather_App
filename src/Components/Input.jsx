import React from 'react';

function Input(props) {

  function handleChange(event) {
    props.funLoc(event.target.value);
  }

  function handleClick() {
    props.search();
  }

  return (
    <div className='container flex'>
      <input
        onChange={handleChange}
        name="loc"
        type="text"
        value={props.loc}
        placeholder="Location"
      />
      <button onClick={handleClick}>
        <i class="fas fa-search"></i>
      </button>
    </div>
  )
}

export default Input;
