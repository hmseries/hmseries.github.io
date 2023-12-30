import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

const Contact = () => (
  <div id="contact" className="contact-form test-border">
    <h2>Contact HMSeries</h2>
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        required
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Your Phone"
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Email Subject"
        required
      />

      <label htmlFor="message">Message:</label>
      <textarea
        type="text"
        id="message"
        name="message"
        placeholder="Type your message here"
        required
      />

      <button type="submit">Submit</button>
    </form>
  </div>
);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
