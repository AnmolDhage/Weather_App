import React from 'react';
import WeatherDataCar from './WeatherDataCar.jsx';
import Input from './Input.jsx';
import Main from './Main.jsx';
import SevenDays from './SevenDays';

const REACT_APP_API_KEY = 'e6a5ad1adfafd574f8393d5d9dfea2dc';

function App() {
  //Location input Variable
  let [loc, setLoc] = React.useState('');



  let [url, setUrl] = React.useState(`https://api.openweathermap.org/data/2.5/weather?q=${''}&appid=${REACT_APP_API_KEY}`);

  let [url2, setUrl2] = React.useState(`https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude=current,minutely,hourly&appid=${REACT_APP_API_KEY}`);

  let [forecastData, setForecastData] = React.useState({
    day1: {
      dt: null,
      tempMin: null,
      tempMax: null,
      main: null,
      logId: null,
    },
    day2: {
      dt: null,
      tempMin: null,
      tempMax: null,
      main: null,
      logId: null,
    },
    day3: {
      dt: null,
      tempMin: null,
      tempMax: null,
      main: null,
      logId: null,
    },
    day4: {
      dt: null,
      tempMin: null,
      tempMax: null,
      main: null,
      logId: null,
    },
    day5: {
      dt: null,
      tempMin: null,
      tempMax: null,
      main: null,
      logId: null,
    },
    day6: {
      dt: null,
      tempMin: null,
      tempMax: null,
      main: null,
      logId: null,
    },
    day7: {
      dt: null,
      tempMin: null,
      tempMax: null,
      main: null,
      logId: null,
    },
  });


  React.useEffect(() => {
    getWeatherForecast();
  }, [url2]);

  function getLoc(loc) {
    setLoc(loc);
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${REACT_APP_API_KEY}`);
  }


  function search() {
    getWeather();
    console.log(loc);
  };

  function dateConverter(inputDate) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = new Date(inputDate * 1000);
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let formattedDate = `${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`
    return formattedDate;
  }

  function timeConverter(inputDate) {
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

    setCarData({
      feelsLike: Math.round((response.main.feels_like - 273.15) * 100) / 100,
      wind: response.wind.speed,
      visibility: response.visibility,
      humidity: response.main.humidity,
      pressure: response.main.pressure,
    });

    setUrl2(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.coord.lat}&lon=${response.coord.lon}&exclude=current,minutely,hourly&appid=${REACT_APP_API_KEY}`);



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
  let getWeatherForecast = async () => {
    const api_call2 = await fetch(`${url2}`);
    const response2 = await api_call2.json();
    setForecastData({
      day1: {
        dt: response2.daily[0].dt,
        tempMin: response2.daily[0].temp.min,
        tempMax: response2.daily[0].temp.max,
        main: response2.daily[0].weather[0].main,
        logId: response2.daily[0].weather[0].icon,
      },
      day2: {
        dt: response2.daily[1].dt,
        tempMin: response2.daily[1].temp.min,
        tempMax: response2.daily[1].temp.max,
        main: response2.daily[1].weather[0].main,
        logId: response2.daily[1].weather[0].icon,
      },
      day3: {
        dt: response2.daily[2].dt,
        tempMin: response2.daily[2].temp.min,
        tempMax: response2.daily[2].temp.max,
        main: response2.daily[2].weather[0].main,
        logId: response2.daily[2].weather[0].icon,
      },
      day4: {
        dt: response2.daily[3].dt,
        tempMin: response2.daily[3].temp.min,
        tempMax: response2.daily[3].temp.max,
        main: response2.daily[3].weather[0].main,
        logId: response2.daily[3].weather[0].icon,
      },
      day5: {
        dt: response2.daily[4].dt,
        tempMin: response2.daily[4].temp.min,
        tempMax: response2.daily[4].temp.max,
        main: response2.daily[4].weather[0].main,
        logId: response2.daily[4].weather[0].icon,
      },
      day6: {
        dt: response2.daily[5].dt,
        tempMin: response2.daily[5].temp.min,
        tempMax: response2.daily[5].temp.max,
        main: response2.daily[5].weather[0].main,
        logId: response2.daily[5].weather[0].icon,
      },
      day7: {
        dt: response2.daily[6].dt,
        tempMin: response2.daily[6].temp.min,
        tempMax: response2.daily[6].temp.max,
        main: response2.daily[6].weather[0].main,
        logId: response2.daily[6].weather[0].icon,
      },


    });

  };

  return (
    <div className="grid">
      <Input funLoc={getLoc} loc={loc} search={search} />
      <Main data={coreDetails} />
      <WeatherDataCar data={carouselData} />
      <SevenDays fData={forecastData} />
    </div>
  );
}

export default App;
