import React from "react";

export default function Footer(){
    return (
        <footer className="footer">
            {/* <div className='flex-footer'>
            
            <a onClick={infoVisible} className="info"><i className="fas fa-info-circle fa-2x"></i></a>
        </div> */}
        
        <div className="info-block">
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
        <a id="i-anc"><i className="fas fa-info-circle fa-2x" /></a>

      </footer>
    )
}