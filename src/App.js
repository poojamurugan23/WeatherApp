import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setWeatherData(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf960caa19fce81197c6d7b931ebb206`
      );

      setWeatherData(response.data);
    } catch (err) {
      if (city == "") {
        setError("Please Enter the City!!!");
      } else {
        setError("City not found");
      }
    }
  };
  return (
    <>
      <body>
        <div class="weather-search-container">
          <h1 className="heading-main">Weather App</h1>
          <form id="weatherForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="cityInput"
              value={city}
              onChange={handleChange}
              placeholder="Enter city name"
            />
            <button type="submit">Search</button>
          </form>
          <div id="error" class="error"></div>
          <div id="weatherResult" class="weather-result"></div>
          <div className="messages">
            {error && <p className="error">{error}</p>}
            {weatherData && (
              <div className="weather-result">
                <h2>{weatherData.name}</h2>
                <p>
                  Temperature: {(weatherData.main.temp - 273.15).toFixed(1)} °C
                </p>
                <p>Weather: {weatherData.weather[0].description}</p>
                <p>Country: {weatherData.sys.country}</p>
              </div>
            )}
          </div>
        </div>
      </body>

      <div className="pooja">
        <a target="_blank" href="https://www.linkedin.com/in/poojamurugan23/">
          Developed By ~ Pooja
        </a>
      </div>
    </>
  );
}

export default App;
