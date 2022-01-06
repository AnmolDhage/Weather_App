import React from 'react';

function Main(props) {
  return (

    <div className="container flex">
      <h1 className="header">{props.data.name}</h1>
      <h3 className="sub-header">{props.data.dt}</h3>
      <img className="main-logo" src={"./Icons/" + props.data.mainLogo + ".svg"} alt="logo" />
      <h1 className="temp-font">{props.data.temp}&deg;<span className="deg-cel">C</span></h1>
      <h2 className="header">{props.data.main}</h2>
      <h2 className="body">Updated As Of {props.data.time}</h2>
    </div>
  )
}

export default Main;
