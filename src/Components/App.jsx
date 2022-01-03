import React from 'react';
import WeatherDataCar from './WeatherDataCar.jsx';

const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=146e375263f49719ecad4b0a3ea7c0db';
const REACT_APP_API_KEY = '146e375263f49719ecad4b0a3ea7c0db';

function App() {
  // Carousel Input Data Object
  let [carouselData, setCarData] = React.useState({
    feelsLike: null,
    wind: null,
    visibility: null,
    humidity: null,
    pressure: null,
  });

  // API Connection
  let getWeather = async() => {
      const api_call = await fetch(`${REACT_APP_API_URL}`);
      const response = await api_call.json();
      setCarData({
        feelsLike: Math.round((response.main.feels_like - 273.15) * 100) / 100,
        wind: response.wind.speed,
        visibility: response.visibility,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
      });
  };
  getWeather();
  return (
    <div className="App">
      <WeatherDataCar data={carouselData}/>
    </div>
  );
}

export default App;
