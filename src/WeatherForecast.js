import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
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
