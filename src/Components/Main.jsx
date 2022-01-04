import React from 'react';

function Main(props) {


  return (
    <div className="container flex">
      <h1 className="header">{props.data.name}</h1>
      <h3 className="sub-header">{props.data.dt}</h3>
      <img src="" alt="" />
      <h1 className="sub-header"></h1>
      <h1 className="temp-font">{props.data.temp}<sup>o</sup></h1>
      <h2 className="header">{props.data.main}</h2>
      <h2 className="body">{props.data.time}</h2>
    </div>
  )
}

export default Main;
