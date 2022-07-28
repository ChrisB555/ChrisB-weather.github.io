import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link data-testid="weatherApi" to="/WeatherApi">
        {" "}
        WeatherAPI{" "}
      </Link>
      <Link to="/Contact"> Contact Us </Link>

      <p>Copyright © 2021 by CB</p>
    </div>
  );
};
export default Footer;
