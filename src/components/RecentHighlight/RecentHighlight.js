import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./RecentHighlight.css";

const RecentHighlight = ({ title, showOnlyImportant }) => {
  const [recenetHighlights, setRecenetHighlights] = useState([
    {
      text: "Megher Palok (মেঘের পালক) just crossed 65K Views",
      important: true,
    },
    {
      text: "Recent Release: Ojantei | অজান্তেই | Bangla Natok",
      important: false,
    },
    {
      text: "Upcoming Release: Stay Tuned",
      important: false,
    },
  ]);

  return (
    <div id="recent-highlight" className="recent-highlight-container">
      <div className="events-wrapper">
        {title && <h2>{title}:</h2>}
        {recenetHighlights
          .filter((highlight) => highlight.important || !showOnlyImportant)
          .map((highlight, index) => (
            <div
              key={index}
              className={`event${
                highlight.important ? " important-event" : ""
              }`}
            >
              <span>{highlight.text}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

RecentHighlight.propTypes = {
  title: PropTypes.string,
  showOnlyImportant: PropTypes.bool.isRequired,
};

RecentHighlight.defaultProps = {
  showOnlyImportant: false,
};

export default RecentHighlight;
