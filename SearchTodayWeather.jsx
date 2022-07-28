import React, { useState } from "react";
import TodayWeatherCard1 from "./TodayWeatherCard1";
import "./Today.css";
import { FaSearch } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { API_KEY, API_BASE_TODAY } from "../../../components/apis/Config";
import Country from "../../../components/Country";

const SearchTodayWeather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(null);

  const changeCountryHandler = (country) => {
    setCountry(country);
  };
  const refresh = () => {
    setIsLoading(true);
    fetch(
      `${API_BASE_TODAY}/weather?q=${cityName},${country.value}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.cod >= 400) {
          setError(result.message);
          alert("Enter a valid city name");
          setCity("");
          setCountry("");
          setIsLoading(false);
          return;
        }

        setIsLoading(false);
        setWeather(result);
      })

      .catch((error) => {
        setError(error);
      });
  };
  const dailySearch = () => {
    setIsLoading(true);
    fetch(
      `${API_BASE_TODAY}/weather?q=${city},${country.value}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((result) => {
        setCityName(city);
        if (result.cod >= 400) {
          setError(result.message);
          alert("Enter a valid city name");
          setCity("");
          setCountry("");
          setIsLoading(false);
          return;
        }
        setCity("");
        setCountry("");
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
        </div>
        <div className="search-box-today">
          <Country changeCountryHandler={changeCountryHandler} />
          <button className="fa" onClick={dailySearch}>
            <FaSearch />
          </button>
        </div>
      </div>
      <div>
        {isLoading && (
          <div>
            {" "}
            <Spinner animation="border" className="spinner" />{" "}
          </div>
        )}
        {isLoading !== true && typeof weather.main !== "undefined" ? (
          <TodayWeatherCard1 weatherData={weather} refresh={refresh} />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SearchTodayWeather;
