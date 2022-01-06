import React from 'react';

function Card(props) {

  function dateConverter(inputDate) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var date = new Date(inputDate * 1000);
    let day = days[date.getDay()];
    let formattedDate = `${day}, ${date.getDate()}`;
    return formattedDate;
  }

  return (
    <div className="card">
      <div>{dateConverter(props.day)}</div>

      <div className="card-img"><img src={"./Icons/" + props.logo + ".svg"} alt="logo" /></div>
      <div >
        <div className="card-temp card-MaxTemp">{Math.round(props.tempMax - 273.15)}&deg;</div>
        <div className="card-temp card-MinTemp">{Math.round(props.tempMin - 273.15)}&deg;</div>
      </div>
      <div>{props.desc}</div>
    </div>
  )
}

export default Card;
