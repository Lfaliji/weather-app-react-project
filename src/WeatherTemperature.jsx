import React from "react";

export default function WeatherTemperature(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function fahrenheitTemperature() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="celsius-unit">°C</span>
        <span className="unit-separator">|</span>
        <span className="fahrenheit-unit">
          <a href="#" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">
          {Math.round(fahrenheitTemperature())}
        </span>
        <span className="celsius-unit">
          <a href="#" onClick={showCelsius}>
            °C
          </a>
        </span>
        <span className="unit-separator">|</span>
        <span className="fahrenheit-unit">°F</span>
      </div>
    );
  }
}
