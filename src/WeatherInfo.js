import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="row">
        <div className="col-7">
          <ul>
            <li className="cityHeader">{props.data.cityName}</li>
            <div className="tempParameters">
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-uppercase">{props.data.description}</li>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind Speed: {Math.round(props.data.wind)} mi/hr</li>
            </div>
          </ul>
        </div>
        <div className="col-5">
          <ul>
            <li className="temperature">
              {Math.round(props.data.temperature)}°C
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
}
