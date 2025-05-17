// src/components/StayUpdated.jsx
import React from 'react';
import './StayUpdated.css'; // Make sure this matches the filename

const StayUpdated = () => {
  return (
    <section className="stay-updated">
      <div className="stay-updated-content">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for updates and news.</p>
        <form className="stay-updated-form">
          <input
            type="email"
            placeholder="Your email address"
            className="email-input"
          />
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default StayUpdated;
