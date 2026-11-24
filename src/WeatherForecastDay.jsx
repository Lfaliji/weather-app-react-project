import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = props.data.temperature.maximum;

    if (props.unit === "fahrenheit") {
      temperature = (temperature * 9) / 5 + 32;
    }
    return Math.round(temperature);
  }

  function minTemperature() {
    let temperature = props.data.temperature.minimum;

    if (props.unit === "fahrenheit") {
      temperature = (temperature * 9) / 5 + 32;
    }
    return Math.round(temperature);
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }

  return (
    <div>
      <div className="WeatherForecastDay-day">{day()}</div>
      <WeatherIcon icon={props.data.condition.icon} size={36} />
      <div className="WeatherForecastDay-temperatures">
        <span className="WeatherForecastDay-temperature-max">
          {maxTemperature()}°
        </span>{" "}
        <span className="WeatherForecastDay-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
