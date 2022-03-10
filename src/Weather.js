import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <li className="cityHeader">New York, NY, USA</li>
            <span className="tempParameters">
              <li>Sunday 05:59 PM</li>
              <li>Sunny</li>
              <li>Precipitation: 13%</li>
              <li>Wind Speed: 5 mi/hr</li>
            </span>
          </ul>
        </div>
        <div className="col-5">
          <ul>
            <li className="temperature">17 C</li>
            <li className="iconPicture">ICON</li>
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
