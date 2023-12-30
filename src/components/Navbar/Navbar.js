import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = () => {
  const navItems = [
    {
      link: "home",
      displayName: "Home",
    },
    {
      link: "video",
      displayName: "Video",
    },
    {
      link: "about",
      displayName: "About",
    },
    {
      link: "contact",
      displayName: "Contact",
    },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navClass = "navbar test-border" + scrollPosition > 729 ? " scrolled" : "";

  return (
    <nav
      id="navbar"
      className={
        scrollPosition > 729
          ? "navbar test-border scrolled"
          : "navbar test-border"
      }
    >
      <div className="logo-container test-border">
        <img src="logoV3.jpg" alt="Logo" />
        <a href="https://www.youtube.com/@HMSeries/community" target="_blank">
          <h1>HMSeries</h1>
        </a>
      </div>
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={"#" + item.link}>{item.displayName}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
