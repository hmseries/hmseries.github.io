import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ToastNotification.css";

const ToastNotification = ({ showToast, message, duration }) => {
  const [show, setShow] = useState(showToast);

  useEffect(() => {
    setShow(showToast);

    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      clearTimeout(timer);
      setShow(false);
      duration = 0;
    };
  }, [showToast, duration]);

  return (
    <div className={`toast-container ${show ? "show" : ""}`}>
      <div className="toast">
        <div className="toast-icon">&#128077;</div>
        <div className="toast-content">
          <p className="toast-message">{message}</p>
          <div className="toast-progress"></div>
        </div>
      </div>
    </div>
  );
};

ToastNotification.propTypes = {};

ToastNotification.defaultProps = {};

export default ToastNotification;
