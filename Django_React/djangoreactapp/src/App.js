import React, { useState, useEffect } from 'react';

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

  return (
    <div>
      <h1>Weather in {weatherData.name}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp} K</p>
          <p>Feels like: {weatherData.main.feels_like} K</p>
          <p>Min Temperature: {weatherData.main.temp_min} K</p>
          <p>Max Temperature: {weatherData.main.temp_max} K</p>
          <p>Pressure: {weatherData.main.pressure} hPa</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;
