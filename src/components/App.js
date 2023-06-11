import React from 'react';
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";


function App({ forecasts, location }) {
  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
    </div>
  );
};
  
export default App;
