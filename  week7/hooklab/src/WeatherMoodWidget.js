import React, { useState, useEffect } from 'react';
import './App.css'; // For basic styling

// ⚠️ Note: You will need to get a free API key from OpenWeatherMap
const API_KEY = "f084148ce5dc8b60df70bba0bc4657a1"; 

function WeatherMoodWidget() {
  // 1. STATE MANAGEMENT
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // 2. HANDLER FOR INPUT
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // 3. EFFECT HOOK FOR API CALL
  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;

      setLoading(true);
      setError(null);
      setWeatherData(null);

      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
          // Check for common error (e.g., city not found)
          throw new Error('City not found or API request failed.');
        }

        const data = await response.json();
        setWeatherData(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    // We only call the API if 'city' has a value
    fetchWeather();

  }, [city]); // ⚠️ Dependency Array: Re-run this effect whenever 'city' changes

  // 4. CONDITIONAL RENDERING
  const renderWeather = () => {
    if (loading) {
      return <h2>Loading weather...</h2>;
    }
    
    if (error) {
      return <h2 style={{ color: 'red' }}>Error: {error}</h2>;
    }

    if (weatherData) {
      // Extract key data
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      let mood = '🤷‍♂️'; // Default mood

      // Simple mood logic based on temperature (example)
      if (temp >= 25) {
        mood = '☀️';
      } else if (temp <= 5) {
        mood = '🥶';
      } else if (description.includes('rain')) {
        mood = '☔';
      } else {
        mood = '😊';
      }

      return (
        <div className="weather-output">
          <h1>{weatherData.name} {mood}</h1>
          <p>Temperature: {temp}°C</p>
          <p>Condition: {description}</p>
        </div>
      );
    }
    
    return <h2>Enter a city to see the weather.</h2>;
  };

  // 5. COMPONENT RENDER
  return (
    <div className="App-header" style={{ border: '2px solid #ccc', padding: '20px', margin: '40px' }}>
      <h1>Weather Mood Widget</h1>
      <input
        type="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter City Name"
        style={{ padding: '10px', fontSize: '1.2em' }}
      />
      {renderWeather()}
    </div>
  );
}

export default WeatherMoodWidget;