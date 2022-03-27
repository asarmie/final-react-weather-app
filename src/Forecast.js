import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <div className="row pt-5">
          <div className="col-3">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-3">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-3">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-3">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e011509df1b670bc25a4f046983a086b";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
