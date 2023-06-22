import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationDetails from "./LocationDetails";
import SearchForm from "./SearchForm";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import "../styles/App.css";

function App() {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      "",
      setErrorMessage
    );
  }, []);

  const handleCitySearch = () => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      searchText,
      setErrorMessage
    );
  };

  return (
    <div className="weather-app">
      <div className="location">
        <LocationDetails
          city={location.city}
          country={location.country}
          errorMessage={errorMessage}
        />
      </div>
      <div className="search-form">
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleCitySearch}
        />
        {!errorMessage && (
          <>
            <ForecastSummaries
              forecasts={forecasts}
              onForecastSelect={handleForecastSelect}
            />
            {selectedForecast && (
              <ForecastDetails forecast={selectedForecast} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
