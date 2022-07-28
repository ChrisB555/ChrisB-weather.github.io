import React from "react";
import "./Today.css";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { CgCompressV } from "react-icons/cg";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";

const TodayWeatherCard1 = ({ weatherData, refresh }) => {
  return (
    <>
      <div className="today-weather-box">
        <div className="today-card">
          <div className="side">
            <div className="header">
              {weatherData.name}, {weatherData.sys.country}
            </div>
            <div className="today-date">
              <p>
                Time: {new Date().toLocaleTimeString()} / Date:{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>
            <p className="main-temp">
              {weatherData.main.temp.toFixed()}&deg; C
            </p>
            <p className="details"> {weatherData.weather[0].main}</p>
          </div>
          <div className="side">
            <button className="button" onClick={refresh}>
              {" "}
              <BiRefresh className="bi" />
            </button>
            <img
              className="today-img"
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="icon"
            />
            <p className="details">
              {weatherData.main.temp_min.toFixed()}&deg;/
              {weatherData.main.temp_max.toFixed()}&deg;
            </p>
          </div>
        </div>

        <div className="today-card">
          <div className="side">
            <div className="second-header">
              <div>
                <p>Feels like:</p>
                <p className="feel">
                  {weatherData.main.feels_like.toFixed()}&deg; C
                </p>
              </div>
              <div>
                <p className="sun">
                  <GiSunrise className="gi" />
                  Sunrise:{" "}
                  {new Date(
                    weatherData.sys.sunrise * 1000
                  ).toLocaleTimeString()}
                </p>
                <p className="sun">
                  <GiSunset className="gi" />
                  Sunset:{" "}
                  {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
                </p>
              </div>
            </div>
            <div className="second">
              <div className="second-header">
                <div className="second-side">
                  <p className="param">
                    Description: {weatherData.weather[0].description}
                  </p>

                  <p className="param">
                    <FaTemperatureHigh className="wi" />
                    Min Temperature: {weatherData.main.temp_min.toFixed()}&deg;
                    C
                  </p>
                  <p className="param">
                    <FaTemperatureHigh className="wi" />
                    Max Temperature: {weatherData.main.temp_max.toFixed()}&deg;
                    C
                  </p>
                </div>
                <div className="second-header">
                  <div className="second-side">
                    <p className="param">
                      <WiHumidity className="wi" />
                      Humidity: {weatherData.main.humidity} %
                    </p>
                    <p className="param">
                      <CgCompressV className="wi" />
                      Pressure: {weatherData.main.pressure} mb
                    </p>
                    <p className="param">
                      <FaWind className="wi" />
                      Wind Speed: {weatherData.wind.speed} km/h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodayWeatherCard1;
