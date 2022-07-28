import React from "react";

const FiveDaysWeatherCard = ({
  dt,
  main,
  icon,
  temp,
  feel,
  humidity,
  wind,
}) => {
  const date = new Date(dt);
  return (
    <div className="card">
      <img
        className="card-img"
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt="icon"
      />
      <h3>{main}</h3>
      <p className="today-date">{date.toLocaleTimeString()}</p>
      <p className="today-date">{date.toLocaleDateString()}</p>
      <p className="card-temp">{Math.round(temp)}&deg; C</p>
      <p className="card-feel">Feels like: {Math.round(feel)}&deg; C</p>
      <p className="card-hum">Humidity:{humidity}%</p>
      <p className="card-wind"> Wind Speed: {wind}km/h </p>
    </div>
  );
};

export default FiveDaysWeatherCard;
