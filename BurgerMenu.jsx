import React from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

const SecondMenu = () => {
  return (
    <div className="burger-menu">
      <Link to="./SearchTodayWeather" className="link">
        <strong> Today Weather</strong>{" "}
      </Link>
      <Link to="./searchFiveDays" className="link">
        <strong> 5 Days Weather</strong>{" "}
      </Link>
      <Link to="./searchCity" className="link">
        <strong> Air Quality</strong>{" "}
      </Link>
    </div>
  );
};

export default SecondMenu;
