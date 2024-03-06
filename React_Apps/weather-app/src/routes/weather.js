import React, { useState, useEffect } from 'react';
import './weather.css';
import axios from 'axios';
import WeatherInfo from './display'; // Import the WeatherInfo component

function WeatherApp() {
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const changeBackground = () => {
      if (weatherData && weatherData.main.humidity > 50) {
        document.body.classList.add('high-humidity');
      } else {
        document.body.classList.remove('high-humidity');
      }
    };

    changeBackground();
    return () => {
      document.body.classList.remove('high-humidity');
    };
  }, [weatherData]);

  const fetchWeatherData = async () => {
    try {
      const apiKey = "db94dcb1d71acbecb74c1b2e8ba33d2e";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${state},${country}&APPID=${apiKey}`;
      const response = await axios.get(url);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch weather data.');
      setWeatherData(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          State:
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </label>
        <label>
          Country:
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
        </label>
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherInfo state={state} country={country} weatherData={weatherData} />} {/* Render WeatherInfo component */}
    </div>
  );
}

export default WeatherApp;
