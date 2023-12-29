import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container test-border">
      <img src="test-logo.png" alt="Logo" />
      <h1>HMSeries</h1>
    </div>
    <ul className="nav-links test-border">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </nav>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
