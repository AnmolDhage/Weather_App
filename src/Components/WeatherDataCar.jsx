import React from 'react';

function WeatherDataCar(props) {
  return(
    <div>

      <div className="carousel-item active">
        <div className="flex">
          <h2 className="body">Feels like {props.data.feelsLike}&deg;C</h2>
          <h2 className="body">Wind {props.data.wind}m/s</h2>
          <h2 className="body">Visibility {props.data.visibility}m</h2>
          <h2 className="body">Humidity {props.data.humidity}%</h2>
          <h2 className="body">Pressure {props.data.pressure} hPa</h2>
        </div>
      </div>

    </div>
  )
}

export default WeatherDataCar;
