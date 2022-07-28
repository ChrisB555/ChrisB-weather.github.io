import React from "react";
import { Col, Row } from "react-bootstrap";
import FiveDaysWeatherCard from "./FiveDaysWeatherCard";
import { BiRefresh } from "react-icons/bi";

const WeatherList = ({ weatherData, refresh }) => {
  return (
    <div className="cards">
      <button className="card-button" onClick={refresh}>
        {" "}
        <BiRefresh className="bi" />
      </button>
      <Row>
        {weatherData.map(({ dt, main, weather, wind }) => (
          <Col key={dt}>
            <FiveDaysWeatherCard
              temp_max={main.temp_max}
              temp_min={main.temp_min}
              temp={main.temp}
              feel={main.feels_like}
              dt={dt * 1000}
              main={weather[0].main}
              icon={weather[0].icon}
              humidity={main.humidity}
              wind={wind.speed}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WeatherList;
