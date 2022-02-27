import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>New York City</li>
            <li>Sunday 05:59 PM</li>
            <li>Sunny</li>
            <li>Precipitation: 13%</li>
            <li>Wind Speed: 5 mi/hr</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>17 C</li>
            <li>ICON</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
