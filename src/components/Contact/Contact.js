import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Contact.css";
import ToastNotification from "../ToastNotificaation/ToastNotification";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("Test Message");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const socialMediaLinks = [
    {
      icon: "facebook",
      profileHighlight: "Connecting with friends",
      link: "https://www.facebook.com/hmseries",
    },
    {
      icon: "twitter",
      profileHighlight: "Tweeting interesting thoughts",
      link: "https://twitter.com/hm_series",
    },
    {
      icon: "instagram",
      profileHighlight: "Sharing beautiful moments",
      link: "https://www.instagram.com/hm_series_music/",
    },
    {
      icon: "linkedin",
      profileHighlight: "Hire Me/Get Hired",
      link: "https://www.linkedin.com/in/neel-milton-5b33bb2a2/",
    },
    // Add more social media links as needed
  ];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowToast = (message) => {
    console.log("handleShowToast");
    setToastMessage(message);
    setShowToast(true);
  };

  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    console.log("Form Data:", formData);
    const apiUrl = "https://droplet.dipan.dev/api/v0/email"; // Replace with your API URL
    const queryParams = {
      name: "Portfolio Website",
      email: "contact.hmseries@gmail.com",
      subject: formData.subject,
    };

    try {
      const response = await fetch(
        `${apiUrl}?${new URLSearchParams(queryParams)}`,
        {
          method: "POST", // Change to 'GET' or 'PUT' as needed
          headers: {
            "Content-Type": "application/json",
            // Add any other headers as needed
          },
          body: JSON.stringify({
            html: `<b>Contact: ${formData.phone}</b><br/>
            <b>Message:</b> ${formData.message}`,
            sender: {
              name: "Portfolio Contact",
              email: "no-reply@hmseries.com",
            },
            replyTo: {
              name: formData.name,
              email: formData.email,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      handleShowToast(data.message);
      setApiResponse(data);
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error state or display an error message to the user
    }
  };

  return (
    <div id="contact" className="contact-form">
      <div id="social-contact">
        <h2>Social Media Profiles</h2>
        <ul className="social-list">
          {socialMediaLinks.map((socialLink, index) => (
            <li key={index} className="social-item">
              <SocialIcon
                url={socialLink.link}
                network={socialLink.icon}
                target="_blank"
              />
              <div className="profile-highlight">
                {socialLink.profileHighlight}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div id="email-contact">
        <h2>Contact HMSeries</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Email Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Type your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
      <ToastNotification
        showToast={showToast}
        message={toastMessage}
        duration={5000}
      />
    </div>
  );
};

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
