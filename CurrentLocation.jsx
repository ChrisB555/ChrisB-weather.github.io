import React, { useEffect, useState } from "react";
import { API_KEY, API_CURR_URL } from "../../../components/apis/Config";
import CurrentWeather from "./CurrentWeather";

const CurrentLocation = () => {
  const [lat, setLat] = useState(undefined);
  const [long, setLong] = useState(undefined);
  const [data, setData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);
  useEffect(() => {
    if (lat && long) {
      fetch(
        `${API_CURR_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    }
  }, [lat, long]);
  return (
    <div>
      {typeof data.main != "undefined" ? (
        <CurrentWeather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default CurrentLocation;
