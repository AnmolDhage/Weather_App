import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <div>{props.day}</div>
      <div>{props.logo}</div>
      <div>{props.temp}</div>
      <div>{props.desc}</div>
    </div>
  )
}

export default Card;