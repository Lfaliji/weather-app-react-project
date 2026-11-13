import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              className="form-control"
            />{" "}
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />{" "}
          </div>
        </div>
      </form>
      <h1>Brussels</h1>
      <ul>
        <li>Friday 17:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="weather-temperature">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_night_light.svg"
              alt="Mostly Cloudy"
            />
            <span className="temperature">7</span>
            <span className="celsius-unit">°C</span>
            <span className="unit-separator">|</span>
            <span className="fahrenheit-unit">°F</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 85%</li>
            <li>Wind: 6km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
