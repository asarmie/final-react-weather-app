import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      percipitation: response.data,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                autofoucs="on"
                placeholder="Please enter city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-7">
            <ul>
              <li className="cityHeader">{props.city}</li>
              <span className="tempParameters">
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-uppercase">{weatherData.description}</li>
                <li>Precipitation: 13%</li>
                <li>Wind Speed: {Math.round(weatherData.wind)} mi/hr</li>
              </span>
            </ul>
          </div>
          <div className="col-5">
            <ul>
              <li className="temperature">
                {Math.round(weatherData.temperature)}°C
              </li>
              <li className="iconPicture">icon</li>
            </ul>
          </div>
        </div>
        <div className="forecast">
          <div className="row pt-5">
            <div className="col-4">Monday 17C</div>
            <div className="col-4">Monday 17C</div>
            <div className="col-4">Monday 17C</div>
          </div>
          <div className="row pt-3">
            <div className="col-4">Monday 17C</div>
            <div className="col-4">Monday 17C</div>
            <div className="col-4">Monday 17C</div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e011509df1b670bc25a4f046983a086b";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
