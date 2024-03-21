// WeatherPage.js
import React from 'react';
import WeatherDisplay from './WeatherDisplay';

function WeatherPage({ state, country, weatherData }) {
  return (
    <div>
      <h1>Weather Information</h1>
      <WeatherDisplay state={state} country={country} weatherData={weatherData} />
    </div>
  );
}

export default WeatherPage;
