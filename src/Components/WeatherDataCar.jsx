import React from 'react';

function WeatherDataCar(props) {
  return (
    <div>

      <div className="carousel-item active">
        <div className="flex">
          <h2 className="body WeatherInfo">Feels like {props.data.feelsLike}&deg;C</h2>
          <h2 className="body WeatherInfo">Wind {props.data.wind}m/s</h2>
          <h2 className="body WeatherInfo">Visibility {props.data.visibility}m</h2>
          <h2 className="body WeatherInfo">Humidity {props.data.humidity}%</h2>
          <h2 className="body WeatherInfo">Pressure {props.data.pressure} hPa</h2>
        </div>
      </div>

    </div>
  )
}

export default WeatherDataCar;
