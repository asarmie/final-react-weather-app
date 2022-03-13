import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-7">
          <h1 className="cityHeader">{props.data.city}</h1>
        </div>
        <div className="col-5">
          <div className="temperature">
            <WeatherTemperature actualTempCelsius={props.data.temperature} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-7">
          <ul>
            <div className="tempParameters">
              <li>
                <FormattedDate actualDate={props.data.date} />
              </li>
              <li className="text-uppercase">{props.data.description}</li>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind Speed: {Math.round(props.data.wind)} mi/hr</li>
            </div>
          </ul>
        </div>
        <div className="col-5">
          <ul>
            <li className="iconPicture">
              <img src={props.data.iconPic} alt="weather" />
            </li>
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
}
