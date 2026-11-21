import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  console.log(props);

  let apiKey = "6a9deo698c10843af1d451t2df75b880";
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    console.log(response.data);
  }

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sat</div>
          <WeatherIcon icon="clear-sky-day" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">9°</span>{" "}
            <span className="WeatherForecast-temperature-min">1°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
