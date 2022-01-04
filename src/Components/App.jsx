import React from 'react';
import WeatherDataCar from './WeatherDataCar.jsx';
import Input from './Input.jsx';
import Main from './Main.jsx';
import SevenDays from './SevenDays';

const REACT_APP_API_KEY = '146e375263f49719ecad4b0a3ea7c0db';

function App() {
  //Location input Variable
  let [loc, setLoc] = React.useState('London');
  let [url, setUrl] = React.useState('https://api.openweathermap.org/data/2.5/weather?q=London&appid=146e375263f49719ecad4b0a3ea7c0db');


  function getLoc(loc) {
    setLoc(loc);
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=146e375263f49719ecad4b0a3ea7c0db`);
  }

  function search() {
    getWeather();
    console.log(loc);
  };

  // Main Data Object
  let [coreDetails, coreUnit] = React.useState({
    name: null,
    dt: null,
    temp: null,
    main: null,
    time: null,
  });

  // Carousel Input Data Object
  let [carouselData, setCarData] = React.useState({
    feelsLike: null,
    wind: null,
    visibility: null,
    humidity: null,
    pressure: null,
  });




  // API Connection
  let getWeather = async () => {
    const api_call = await fetch(`${url}`);
    const response = await api_call.json();
    setCarData({
      feelsLike: Math.round((response.main.feels_like - 273.15) * 100) / 100,
      wind: response.wind.speed,
      visibility: response.visibility,
      humidity: response.main.humidity,
      pressure: response.main.pressure,
    });

    var date = new Date(response.dt * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    coreUnit({
      temp: Math.round((response.main.temp - 273.15) * 10) / 10,
      name: response.name,
      dt: formattedTime,
      time: response.timezone,
      main: response.weather.main,
    });

  };
  // getWeather();
  return (
    <div className="grid">
      <Input funLoc={getLoc} loc={loc} search={search} />
      <Main data={coreDetails} />
      <WeatherDataCar data={carouselData} />
      <SevenDays />
    </div>
  );
}

export default App;
