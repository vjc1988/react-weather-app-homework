import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a City ..."
              className="search-bar w-100"
              autoFocus="on"
            />
          </div>

          <div className="col-6 search-button">
            <input type="submit" value="Search" className="btn w-100" />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
          <span className="temperature">6</span>
          <span className="unit">°c</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 32%</li>
            <li>Wind: 9mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
