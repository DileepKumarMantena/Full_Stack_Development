import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

function WeatherApp() {
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, [state, country]);

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
    <Router>
      <div>
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
        {weatherData && (
          <div>
            <p>Weather information for {state}, {country}:</p>
            <WeatherPage weatherData={weatherData} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default WeatherApp;
