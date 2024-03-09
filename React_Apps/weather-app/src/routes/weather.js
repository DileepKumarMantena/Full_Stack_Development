import React, { useState, useEffect } from 'react';
import './weather.css';
import axios from 'axios';
import WeatherInfo from './display'; // Import the WeatherInfo component
import Registration from './Registration'; // Import the Registration component
import Login from './Login'; // Import the Login component

function WeatherApp() {
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    // Set background color based on humidity
    if (weatherData && weatherData.main && weatherData.main.humidity > 50) {
      setBackgroundColor('high-humidity');
    } else {
      setBackgroundColor('');
    }
  }, [weatherData]);

  const handleRegister = (userData) => {
    // Store user data in local storage for simplicity
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogin = (userData) => {
    // Perform authentication, in this example, just set user data from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.username === userData.username && parsedUser.password === userData.password) {
        setUser(parsedUser);
        setIsLoggedIn(true);
      } else {
        setError('Invalid username or password');
      }
    } else {
      setError('User not found');
    }
  };

  const handleLogout = () => {
    // Clear user data from local storage and state
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
  };

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
    <div className={`WeatherApp ${backgroundColor}`}>
      {!isLoggedIn ? (
        <div>
          <Registration onRegister={handleRegister} />
          <Login onLogin={handleLogin} />
          {error && <p className="error">{error}</p>}
        </div>
      ) : (
        <div>
          <h1>Welcome, {user.username}!</h1>
          <button onClick={handleLogout}>Logout</button>
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
          {weatherData && <WeatherInfo state={state} country={country} weatherData={weatherData} />}
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
