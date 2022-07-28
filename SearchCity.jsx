import React, { useState } from "react";
import AirQualityCard from "./AirQualityCard";
import "./AirQuality.css";
import { FaSearch } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import Country from "../../../components/Country";
import { API_KEY, geo_url, API_AIR_URL } from "../../../components/apis/Config";

const SearchCity = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [lat, setLat] = useState(undefined);
  const [long, setLong] = useState(undefined);
  const [error, setError] = useState(null);

  const changeCountryHandler = (country) => {
    setCountry(country);
  };

  const getPollutionData = (lat, long) => {
    fetch(
      `${API_AIR_URL}/air_pollution?lat=${lat}&lon=${long}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.cod >= 400) {
          setError(result.message);
          alert("Enter a valid city name");
          setCity("");
          setIsLoading(false);
          return;
        }
        setData(result);
      })
      .catch((error) => setError(error));
  };

  const polutionSearch = () => {
    setIsLoading(true);
    fetch(
      `${geo_url}direct?q=${city},${country.value}&limit=5&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setCityName(result[0].name);
        setCity("");
        setIsLoading(false);
        getPollutionData(result[0].lat, result[0].lon);
        setLat(result[0].lat);
        setLong(result[0].lon);
      })

      .catch((error) => {
        alert("Enter a valid city name");
        setCity("");
        setIsLoading(false);
      });
  };
  return (
    <div className="air">
      <div className="search-air">
        <div className="search-box-air">
          <input
            type="text"
            placeholder="Search City..."
            className="search-bar-air"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            style={{ marginBottom: "335px" }}
          ></input>
        </div>
        <div className="search-box-air">
          <Country changeCountryHandler={changeCountryHandler} />
          <button className="fa" onClick={polutionSearch}>
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
        {isLoading !== true && cityName !== "" ? (
          <AirQualityCard
            polutionData={data}
            cityName={cityName}
            refresh={() => getPollutionData(lat, long)}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default SearchCity;
