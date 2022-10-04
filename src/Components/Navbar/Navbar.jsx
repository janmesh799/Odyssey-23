import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import iconImage from "../../images/iconImage.png";
import "./Navbar.css";

const Navbar = () => {
  const [event, setevent] = useState("hide-event");
  const [spons, setspons] = useState("hide-spons");
  const showEvents = () => {
    setspons("hide-spons");
    if (event === "hide-event") {
      setevent("drop-event");
    } else {
      setevent("hide-event");
    }
  };
  const showSpons = () => {
    setevent("hide-event");
    if (spons === "hide-spons") {
      setspons("drop-spons");
    } else {
      setspons("hide-spons");
    }
  };
  return (
    <nav className="topnav" id="myTopnav">
      <a href="/" className="odylogo" id="nav-odylogo">
        <img alt="icon" src={iconImage} />
      </a>
      <a href="/" className="icon" id="toggle-nav">
        &#9776;
      </a>
      <div className="nav-links">
        <a href="/">
          <span className="nav-link">Home</span>
        </a>
        <a style={{ fontFamily: "'Lato', sans-serif" }} href="/">
          <span className="nav-link">OT</span>
        </a>
        <div id="events" className="dropdown">
          <button onClick={showEvents} className="dropbtn">
            <span className="nav-link">Events</span>
            <ArrowDropDownIcon />
          </button>
          <div id={event} className="dropdown-content ">
            <a href="404/index.html">Click me</a>
            <a href="404/index.html">Click me</a>
            <a href="404/index.html">Click me</a>
          </div>
        </div>
        <div className="dropdown">
          <button
            style={{ fontFamily: "'Lato', sans-serif" }}
            onClick={showSpons}
            className="dropbtn"
          >
            <span className="nav-link">Sponsors</span>
            <ArrowDropDownIcon />
          </button>
          <div id={spons} className="dropdown-content ">
            <a href="404/index.html">Click me</a>
            <a href="404/index.html">Click me</a>
            <a href="404/index.html">Click me</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
