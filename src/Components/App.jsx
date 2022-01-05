import React from 'react';
import WeatherDataCar from './WeatherDataCar.jsx';
import Input from './Input.jsx';
import Main from './Main.jsx';
import SevenDays from './SevenDays';

const REACT_APP_API_KEY = '146e375263f49719ecad4b0a3ea7c0db';

function App() {
  //Location input Variable
  let [loc, setLoc] = React.useState('');

  // let [coord, setCoord] = React.useState({
  //   lon: null,
  //   lat: null,
  // });

  let [url, setUrl] = React.useState(`https://api.openweathermap.org/data/2.5/weather?q=${''}&appid=146e375263f49719ecad4b0a3ea7c0db`);

  let [url2, setUrl2] = React.useState('https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude=current,minutely,hourly&appid=146e375263f49719ecad4b0a3ea7c0db');

  React.useEffect(() => {
    getWeatherForecast();
  }, [url2]);

  function getLoc(loc) {
    setLoc(loc);
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=146e375263f49719ecad4b0a3ea7c0db`);
  }


  function search() {
    getWeather();
    console.log(loc);
  };

  function dateConverter(inputDate)
  {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = new Date(inputDate * 1000);
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let formattedDate = `${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`
    return formattedDate;
  }

  function timeConverter(inputDate)
  {
    var date = new Date(inputDate * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
  }

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
    // setCoord({
    //   lon: 5,
    //   lat: 10,
    // });

    setCarData({
      feelsLike: Math.round((response.main.feels_like - 273.15) * 100) / 100,
      wind: response.wind.speed,
      visibility: response.visibility,
      humidity: response.main.humidity,
      pressure: response.main.pressure,
    });

    setUrl2(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&exclude=current,minutely,hourly&appid=146e375263f49719ecad4b0a3ea7c0db`);

    let formattedTime = timeConverter(response.dt);
    let formattedDate = dateConverter(response.dt);

    coreUnit({
      temp: Math.round((response.main.temp - 273.15) * 10) / 10,
      name: response.name,
      dt: formattedDate,
      time: formattedTime,
      main: response.weather[0].main,
    });

  };

  //WeatherForecast API Connection
  let getWeatherForecast = async() => {
      const api_call2 = await fetch(`${url2}`);
      const response2 = await api_call2.json();
      console.log(response2);
  };

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
