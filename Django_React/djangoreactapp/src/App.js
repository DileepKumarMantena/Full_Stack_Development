import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Austin,Usa&APPID=db94dcb1d71acbecb74c1b2e8ba33d2e');
        const responseData = await response.json();
        console.log("Response Data:", responseData);

        if (response.ok) {
          // If response is ok, set weather data
          setWeatherData(responseData);
        } else {
          // If response is not ok, set error message
          setError('Failed to fetch weather data');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch weather data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const containerClass = weatherData.main?.humidity > 60 ? 'high-humidity' : 'low-humidity';

  return (
    <div className={containerClass}>
      <div className="container">
        <h1>Weather in {weatherData.name}</h1>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <div>
            <p style={{ color: 'blue' }}>
              Description: <span style={{ color: 'black' }}>{weatherData.weather[0].description}</span>
            </p>
            <p style={{ color: 'blue' }}>
              Temperature: <span style={{ color: 'black' }}>{weatherData.main.temp} K</span>
            </p>
            <p style={{ color: 'blue' }}>
              Feels like: <span style={{ color: 'black' }}>{weatherData.main.feels_like} K</span>
            </p>
            <p style={{ color: 'blue' }}>
              Min Temperature: <span style={{ color: 'black' }}>{weatherData.main.temp_min} K</span>
            </p>
            <p style={{ color: 'blue' }}>
              Max Temperature: <span style={{ color: 'black' }}>{weatherData.main.temp_max} K</span>
            </p>
            <p style={{ color: 'blue' }}>
              Pressure: <span style={{ color: 'black' }}>{weatherData.main.pressure} hPa</span>
            </p>
            <p style={{ color: 'blue' }}>
              Humidity: <span style={{ color: 'black' }}>{weatherData.main.humidity}%</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
