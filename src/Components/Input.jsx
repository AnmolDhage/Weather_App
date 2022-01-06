import React from 'react';

function Input(props) {

  function handleChange(event) {
    props.funLoc(event.target.value);
  }

  function handleClick() {
    props.search();
  }

  return (
    <div className="searchbar">
      <div className='container flex'>
        <input
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              props.search();
            }
          }}

          onChange={handleChange}
          name="loc"
          type="text"
          value={props.loc}
          placeholder="Location"
          autoComplete="off"
        />
        <button onClick={handleClick}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  )
}

export default Input;
