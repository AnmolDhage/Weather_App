import React from 'react';
import {Carousel} from 'react-bootstrap';

function WeatherDataCar(props) {

  let [width, setWidth] = React.useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setWidth(window.innerWidth);
    console.log(width);
  });

  if(width <= 425) {
    return (
      <div className="weatherCarousel">

        <Carousel interval={2000}>
          <Carousel.Item>
            <div className="flex">
              <h2 className="body WeatherInfo">Feels like {props.data.feelsLike}&deg;C</h2>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="flex">
              <h2 className="body WeatherInfo">Wind {props.data.wind}m/s</h2>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="flex">
              <h2 className="body WeatherInfo">Visibility {props.data.visibility}m</h2>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="flex">
              <h2 className="body WeatherInfo">Humidity {props.data.humidity}%</h2>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="flex">
              <h2 className="body WeatherInfo">Pressure {props.data.pressure} hPa</h2>
            </div>
          </Carousel.Item>

        </Carousel>

      </div>
    )

  } else {
      return (
        <div className="carousel-item active">
          <div className="flex">
            <h2 className="body WeatherInfo">Feels like <br /> {props.data.feelsLike}&deg;C</h2>
            <h2 className="body WeatherInfo">Wind <br /> {props.data.wind}m/s</h2>
            <h2 className="body WeatherInfo">Visibility <br /> {props.data.visibility}m</h2>
            <h2 className="body WeatherInfo">Humidity <br /> {props.data.humidity}%</h2>
            <h2 className="body WeatherInfo">Pressure <br /> {props.data.pressure} hPa</h2>
          </div>
        </div>
      )
    }
}

export default WeatherDataCar;
