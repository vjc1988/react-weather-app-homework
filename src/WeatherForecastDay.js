import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weather-forecast-day-container">
      <div className="WeatherForecast-Day">{day()}</div>
      <img
        src={props.data.condition.icon_url}
        alt="forecast icon"
        className="Weather-Forecast-Image"
      />
      <div className="WeatherForecast-Temperatures">
        <span className="WeatherForecast-Temperature-Max">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-Temperature-Min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
