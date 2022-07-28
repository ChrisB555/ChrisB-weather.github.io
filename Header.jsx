import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  const toggleOpenMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Navbar id="nav">
        <button className="burger" onClick={toggleOpenMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
        <div className="date">{dateBuilder(new Date())}</div>
        <Navbar.Brand>
          <Link to="./CurrentLocation">
            <img className="logo" src="logo3.jfif" alt="logo" />
          </Link>
        </Navbar.Brand>
      </Navbar>
      {isMenuOpen && <BurgerMenu />}
    </>
  );
};

export default Header;
