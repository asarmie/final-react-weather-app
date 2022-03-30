import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span>{Math.round(props.actualTempFahrenheit)}</span>
        <span className="units">
          °F|
          <a href="/" onClick={showCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.actualTempFahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <span>{Math.round(celsius)} </span>
        <span className="units">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
          | °C
        </span>
      </div>
    );
  }
}
