import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "bd69aeefb72b8a36of7aa0db00f9b34t";
  let city = props.city;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

  axios.get(apiURL).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-Day">Thu</div>
          <div>Icon</div>
          <div className="WeatherForecast-Temperatures">
            <span className="WeatherForecast-Temperature-Max">19°</span>
            <span className="WeatherForecast-Temperature-Min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
