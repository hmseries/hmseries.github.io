import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

const Carousel = () => {
  const carouselSize = Array.from({ length: 6 }, (_, index) => index + 1);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselSize.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex, carouselSize.length]);

  return (
    <div id="carousel" className="carousel">
      {carouselSize.map((i, index) => {
        return (
          <div
            key={index}
            className={`slide ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={"carousel/carouselV" + i + ".jpg"}
              alt={`Slide ${index + 1}`}
            />
          </div>
        );
      })}
    </div>
  );
};

Carousel.propTypes = {};

Carousel.defaultProps = {};

export default Carousel;
