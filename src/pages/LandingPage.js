import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import bgImage from './assets/e-waste-bg.jpg';

const LandingPage = () => {
  const [eWasteCollected, setEWasteCollected] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setEWasteCollected((prev) => prev + Math.floor(Math.random() * 10));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="landing-hero">
        <div
          className="parallax-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="hero-content">
          <h1 className="landing-title">E-Drop</h1>
          <p className="landing-subtitle">
            By Team E-cycle
          </p>
          <div className="landing-actions">
            <button className="cta-button" onClick={() => navigate('/bin-finder')}>
              Find an E-Bin
            </button>
            <button className="secondary-button" onClick={() => navigate('/awareness')}>
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="landing-stats">
        <h2 className="stats-title">E-Waste Collected This Week</h2>
        <div className="counter-box">
          <h3 className="counter-value">{eWasteCollected} KG</h3>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="landing-footer">
        <div className="footer-links">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>
              Team E-Cycle is dedicated to reducing e-waste through awareness and
              responsible recycling.
            </p>
          </div>
          <div className="footer-column">
            <h3>Contact</h3>
            <p>Email: ecycle.connect@gmail.com</p>
            <p>Phone: +91 99200 55779</p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li onClick={() => navigate('/bin-finder')}>Find an E-Bin</li>
              <li onClick={() => navigate('/awareness')}>Awareness</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Team E-Cycle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
