import React from "react";
import PropTypes from "prop-types";
import "./RecentHighlight.css";

const RecentHighlight = () => {
  const recenetHighlights = [
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
  ];
  return (
    <div id="recent-highlight" className="recent-highlight-container">
      <div className="events-wrapper">
        <h2>HM Series Highlights:</h2>
        {recenetHighlights.map((highlight) => (
          <div
            className={`event${highlight.important ? " important-event" : ""}`}
          >
            <span>{highlight.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

RecentHighlight.propTypes = {};

RecentHighlight.defaultProps = {};

export default RecentHighlight;
