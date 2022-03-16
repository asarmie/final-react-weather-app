import React from "react";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row pt-5">
        <div className="col-4">
          <ul>
            <li>Monday</li>
            <li>
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="forecast pic"
              />
            </li>
            <li>17°C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
