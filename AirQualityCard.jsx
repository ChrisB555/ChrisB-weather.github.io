import React from "react";
import { BiRefresh } from "react-icons/bi";

const AirQualityCard = ({ polutionData, cityName, refresh }) => {
  return (
    <div className="air-card">
      <div className="air-main">
        <p className="air-name">{cityName}</p>
        <div className="air-value">
          <p>Current Air Quality: {polutionData?.list?.[0]?.main?.aqi ?? ""}</p>
        </div>
        <div className="air-values">
          Concentration of Carbon Monoxide:{" "}
          {polutionData?.list?.[0]?.components?.co ?? ""},μg/m3
        </div>
        <div className="air-values">
          Concentration of Fine Particulate Matter:{" "}
          {polutionData?.list?.[0]?.components?.pm2_5 ?? ""},μg/m3
        </div>
        <div className="air-values">
          Concentration of Nitrogen Dioxide:{" "}
          {polutionData?.list?.[0]?.components?.no2 ?? ""},μg/m3
        </div>
        <div className="air-values">
          Concentration of Ozone:{" "}
          {polutionData?.list?.[0]?.components?.o3 ?? ""}
          ,μg/m3
        </div>
        <div className="air-values">
          Concentration of Ammonia:{" "}
          {polutionData?.list?.[0]?.components?.so2 ?? ""},μg/m3
        </div>
      </div>
      <div className="air-main">
        <button className="button" onClick={refresh}>
          {" "}
          <BiRefresh className="bi" />
        </button>
        <div className="air-index">
          <p> Air quality index values: 1, 2, 3, 4, 5</p>
          <p>1 = Good</p>
          <p>2 = Fair</p>
          <p>3 = Moderate</p>
          <p>4 = Poor</p>
          <p>5 = Very Poor</p>
        </div>
      </div>
    </div>
  );
};
export default AirQualityCard;
