import React from "react";

export default function Footer(){

    const Clicked = () => {
        document.getElementById('infBlock').classList.toggle('info-visible');
      }

    return (
        <footer className="footer">
            <div className="info-block" id="infBlock">
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

            <a className="infoBtn" onClick={Clicked}><i className="fas fa-info-circle fa-2x" /></a>
           
      </footer>
    )
}