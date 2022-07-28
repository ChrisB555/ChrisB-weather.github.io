import React from "react";
import "./Contact.css";
import { CgAsterisk } from "react-icons/cg";

const Contact = () => {
  return (
    <div className="contact">
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <div className="items">
        <label>
          Topic{" "}
          <CgAsterisk
            style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
          />
        </label>
        <br />
        <select name="topic" className="select">
          <option>Select Topic</option>
          <option>Website</option>
          <option>Mobile Website</option>
          <option>Advertising</option>
          <option>Privacy Policy</option>
          <option>Photos</option>
        </select>
      </div>
      <div className="items">
        <label>
          Name{" "}
          <CgAsterisk
            style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
          />
        </label>
        <input type="text" placeholder="Name"></input>
      </div>
      <div className="items">
        <label>Company Name</label>
        <input type="text" placeholder=" Company Name"></input>
      </div>
      <div className="items">
        <label>
          Email{" "}
          <CgAsterisk
            style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
          />
        </label>
        <input type="email" placeholder=" Email"></input>
      </div>
      <div className="items">
        <label>
          City{" "}
          <CgAsterisk
            style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
          />
        </label>
        <input type="text" placeholder=" City"></input>
      </div>
      <div className="items">
        <label>
          Message{" "}
          <CgAsterisk
            style={{ color: "rgb(231, 49, 49", marginBottom: "12px" }}
          />
        </label>
        <br />
        <textarea rows="7" cols="60"></textarea>
      </div>
      <div className="items">
        <button type="button" className="btn">
          Send Message
        </button>
      </div>
    </div>
  );
};
export default Contact;
