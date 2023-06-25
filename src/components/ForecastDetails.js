import React from "react";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">
        <h2>{formattedDate}</h2>
      </div>
      <div className="forecast-details__temperature-min">
        <span>Min temperature: </span>
        {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__temperature-max">
        <span>Max temperature: </span>
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__humidity">
        <span>Humidity: </span>
        {humidity}%
      </div>
      <div className="forecast-details__wind-speed">
        <span>Wind speed: </span>
        {wind.speed} mph
      </div>
      <div className="forecast-details__wind-direction">
        <span>Wind direction: </span>
        {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;
