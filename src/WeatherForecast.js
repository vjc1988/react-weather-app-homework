import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-Day">{forecast[0].time}</div>
            <div>{forecast[0].condition.icon}</div>
            <div className="WeatherForecast-Temperatures">
              <span className="WeatherForecast-Temperature-Max">
                {forecast[0].temperature.maximum}°
              </span>
              <span className="WeatherForecast-Temperature-Min">
                {forecast[0].temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "bd69aeefb72b8a36of7aa0db00f9b34t";
    let city = props.city;
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;

    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
