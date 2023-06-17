import React, { useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import "../styles/App.css";

function App({ forecasts, location }) {
  const [selectedDate, setSelectedDate] = useState(forecasts[0].date);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  function handleForecastSelect(date) {
    setSelectedDate(date);
  }

  return (
    <div className="weather-app">
      <div className="forecast">
        <div className="location">
          <LocationDetails city={location.city} country={location.country} />
        </div>
        <ForecastSummaries
          forecasts={forecasts}
          // eslint-disable-next-line react/jsx-no-bind
          onForecastSelect={handleForecastSelect}
        />
        <ForecastDetails forecast={selectedForecast} />
      </div>
    </div>
  );
}

export default App;
