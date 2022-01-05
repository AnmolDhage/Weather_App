import React from 'react';

function Card(props) {

  function dateConverter(inputDate) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var date = new Date(inputDate * 1000);
    let day = days[date.getDay()];
    let formattedDate = `${day}, ${date.getDate()}`;
    return formattedDate;
  }

  return (
    <div className="card">
      <div>{dateConverter(props.day)}</div>
      <div><img src={`.././Icons/${props.logo}.png`} alt={props.logo}/></div>
      <div>{Math.round((props.tempMin - 273.15) * 100) / 100}&deg;C</div>
      <div>{Math.round((props.tempMax - 273.15) * 100) / 100}&deg;C</div>
      <div>{props.desc}</div>
    </div>
  )
}

export default Card;
