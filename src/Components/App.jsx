import React from 'react';
import WeatherDataCar from './WeatherDataCar.jsx';
import Input from './Input.jsx';
import Main from './Main.jsx';
import SevenDays from './SevenDays.jsx';
let _ = require('lodash');

const REACT_APP_API_KEY = '72e9f804324727a67b4b9ce389ed8e04';



function App() {
  window.onload = search;
  //Location input Variable
  let [loc, setLoc] = React.useState('Mumbai');

  let [infoc, setInfoc] = React.useState('info-content');

  let [url, setUrl] = React.useState(`https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${REACT_APP_API_KEY}`);

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

  function infoVisible() {
    setInfoc(prevValue => {
      return prevValue === 'info-content' ? 'info-content info-visible aboutFont' : 'info-content';
    });
  }

  function getLoc(loc) {
    setLoc(loc);
    setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${_.startCase(loc)}&appid=${REACT_APP_API_KEY}`);
  }


  function search() {
    setLoc(_.startCase(loc));
    getWeather();
    setLoc('');
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
    // Will display time in 10:30:23 format
    var formattedTime = hours + ':' + minutes.substr(-2);

    return formattedTime;
  }

  // Main Data Object
  let [coreDetails, coreUnit] = React.useState({
    mainLogo: null,
    name: 'City',
    country: 'Country',
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

    if (response.name != _.startCase(loc)) {
      alert(`Sorry we couldn't find ${loc}. We're displaying the nearest city name data. Press OK to continue.`);
    }

    let formattedTime = timeConverter(response.dt);
    let formattedDate = dateConverter(response.dt);

    coreUnit({
      mainLogo: response.weather[0].icon,
      temp: Math.round((response.main.temp - 273.15) * 10) / 10,
      name: response.name,
      country: response.sys.country,
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
    <div className="flex">

      <div className='Nav'>
        <div id="nav" className="container flex">
          <img className="wm-logo" src="./Images/Weather_Mate_logo.png" alt="wm-logo" />
          <div>
            <Input funLoc={getLoc} loc={loc} search={search} />
          </div>
        </div>
      </div>

      <div className="grid">
        <Main data={coreDetails} />
        <WeatherDataCar data={carouselData} />
        <SevenDays fData={forecastData} />
      </div>

      <div className='flex-footer'>
        <div className={infoc}>
          <p>
            Greetings from Weather Mate!
          </p>
          <p>
            Weather Mate, one of the best responsive weather application on web.
            It consists of accurate weather info for anytime and everywhere.
          </p>
          <p>
            WeatherMate provides weather details, atmospheric pressure, relative humidity, visibility distance, wind speed, in addition to 7 days future forecast.
          </p>
          <p>
            Powered By
            <img className="open-weather-logo" src="./Images/open-weather-logo.png" alt="open-weather-logo" />
          </p>
        </div>
        <a onClick={infoVisible} className="info"><i className="fas fa-info-circle fa-2x"></i></a>
      </div>
    </div>
  );

}

export default App;
