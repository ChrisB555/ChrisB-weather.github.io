import React, { useState } from "react";
import FiveDaysList from "./FiveDaysList";
import "./FiveDays.css";
import { FaSearch } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { api_five_url, API_KEY } from "../../../components/apis/Config";

const SearchTodayWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [cityName, setCityName] = useState("");

  const refresh = () => {
    window.location.reload();
  };
  const fiveSearch = () => {
    setIsLoading(true);
    fetch(
      `${api_five_url}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setCityName(city);
        if (result.cod >= 400) {
          setError(result.message);
          alert("Enter a valid city name");
          setCity("");
          setIsLoading(false);
          return;
        }
        setCity("");
        setIsLoading(false);
        setWeather(result);
      })

      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="weather">
      <div className="search-today">
        <div className="search-box-today">
          <input
            className="search-bar-today"
            type="text"
            placeholder="Search City..."
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />{" "}
          <button className="fa-five" onClick={fiveSearch}>
            <FaSearch />
          </button>
        </div>
      </div>
      <div>
        {isLoading && (
          <div>
            {" "}
            <Spinner animation="border" className="spinner" />
          </div>
        )}
        {isLoading !== true && typeof weather.list !== "undefined" ? (
          <FiveDaysList weatherData={weather.list} refresh={refresh} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SearchTodayWeather;
