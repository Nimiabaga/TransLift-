// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section logo-section">
          <h3 className="logo-text">TransLift</h3>
          <p>
            Supporting transgender individuals through community, healthcare, and advocacy.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/impact">Our Impact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><a href="/healthcare">Healthcare Access</a></li>
            <li><a href="/legal">Legal Support</a></li>
            <li><a href="/community">Community Groups</a></li>
            <li><a href="/education">Educational Materials</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/cookies">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 TransLift. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
