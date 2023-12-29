import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    "carousel/bikel.jpg",
    "carousel/Poster.jpg",
    "carousel/img3.jpg",
  ]; // Add your image paths
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the activeIndex to display the next image
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear the interval when the component is unmounted or dependencies change
    return () => clearInterval(intervalId);
  }, [activeIndex, images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === activeIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
      {/* <div className="slide active">
        <img src="carousel/bikel.jpg" alt="Slide 1" />
      </div>
      <div className="slide">
        <img src="carousel/Poster.jpg" alt="Slide 2" />
      </div>
      <div className="slide">
        <img src="carousel/img3.jpg" alt="Slide 3" />
      </div> */}
    </div>
  );
};

Carousel.propTypes = {};

Carousel.defaultProps = {};

export default Carousel;
