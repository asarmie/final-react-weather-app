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

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span>{Math.round(props.actualTempCelsius)}</span>
        <span className="units">
          °C|
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.actualTempCelsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span>{Math.round(fahrenheit)} </span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
