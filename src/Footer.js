import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Connect Section */}
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <a
            href="https://www.instagram.com/team.ecycle/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Instagram: @team.ecycle
          </a>
          <p className="footer-email">Email: ecycle.connect@gmail.com</p>
        </div>

        {/* Resources Section */}
        <div className="footer-section">
          <h3>Resources</h3>
          <a
            href="https://www.sigmatraffic.com/blog/how-to-increase-alexa-rank-in-30-days-100-result?ref=300048"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Improve Alexa Rank
          </a>
        </div>

        {/* Copyright Section */}
        <div className="footer-section">
          <p>&copy; 2025 Team E-Cycle. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
