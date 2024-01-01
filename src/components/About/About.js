import React from "react";
import PropTypes from "prop-types";
import "./About.css";

const About = () => {
  const ourServices = [
    {
      name: "Reel Shoot",
      description: `Capture your musical journey in a
      visually stunning reel. Our team ensures the essence of your music
      is beautifully represented.`,
    },
    {
      name: "Photo Shoot",
      description: `Showcase your personality and style
      with our professional photo shoots. We capture the uniqueness of
      your music persona.`,
    },
    {
      name: "Video Editing",
      description: `Bring your music to life with our
      expert video editing services. We create engaging visuals that
      complement your sound.`,
    },
  ];
  return (
    <div id="about" className="about">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our music company! We are passionate about creating and
          promoting exceptional music experiences. Our team consists of talented
          individuals dedicated to delivering high-quality services to our
          clients.
        </p>

        <h2>Our Services</h2>
        <ul className="services-list">
          {ourServices.map((service, index) => (
            <li key={index}>
              <strong>{service.name}:</strong> {service.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

About.propTypes = {};

About.defaultProps = {};

export default About;
