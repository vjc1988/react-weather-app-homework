import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setweatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    let apiKey = "bd69aeefb72b8a36of7aa0db00f9b34t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units={metric}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
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
              <input
                type="submit"
                value="Search"
                className="btn w-100"
                onChange={handleCityChange}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
