import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import RecentHighlight from "../RecentHighlight/RecentHighlight";

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

  return (
    <nav
      id="navbar"
      className={scrollPosition > 729 ? "navbar scrolled" : "navbar"}
    >
      <div className="logo-container">
        <img src="logoV3.jpg" alt="Logo" />
        <a href="https://www.youtube.com/@HMSeries/community" target="_blank">
          <h1>HM Series</h1>
        </a>
      </div>
      <div className="stretch-item">
        <RecentHighlight showOnlyImportant={true} />
      </div>
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={"#" + item.link}>{item.displayName}</a>
          </li>
        ))}
      </ul>
      <div className="dropdown">
        <button className="dropdown-toggle">Links</button>
        <div className="dropdown-menu">
          {navItems.map((item, index) => (
            <a key={index} href={"#" + item.link} className="menu-item">
              {item.displayName}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
