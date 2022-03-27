import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }
  function day() {
    let actualDay = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = new Date(props.data.dt * 1000);
    let formattedDay = actualDay[day.getDay()];
    return `${formattedDay}`;
  }

  return (
    <div className="WeatherForecastDay">
      <ul>
        <li>{day()}</li>
        <li>
          <img
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt="forecast pic"
          />
        </li>
        <li>
          <span className="maxTemp">{maxTemperature()}</span> |{" "}
          <span className="MinTemp">{minTemperature()}</span>
        </li>
      </ul>
    </div>
  );
}
