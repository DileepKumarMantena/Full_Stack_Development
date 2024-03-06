import React from 'react';
import './weather.css';


function WeatherInfo({ state, country, weatherData }) {
  return (
    <div className="weather-info">
      <h2>Weather in {state}, {country}:</h2>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Humidity: {weatherData.main.humidity} % {weatherData.main.humidity > 50 ? "🌞" : "⛄"}</p>
    </div>
  );
}

export default WeatherInfo;
