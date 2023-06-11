import React from 'react';
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import "../styles/App.css";


function App({ forecasts, location }) {
  return (
    <div className="weather-app">
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
    </div>
  );
};
  
export default App;
