import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <p className="about-us-description">
        At <b>Team E-Cycle</b>, our mission is to promote responsible e-waste management and recycling. We strive to
        educate individuals and communities about the importance of sustainable practices to build a greener planet.
      </p>
      <div className="about-us-details">
        <div>
          <h2>Our Vision</h2>
          <p>
            To create a world where e-waste is responsibly recycled, reducing environmental impact and promoting a circular economy.
          </p>
        </div>
        <div>
          <h2>Our Mission</h2>
          <p>
            Empower individuals with tools, knowledge, and motivation to recycle electronic waste responsibly through education,
            awareness, and gamification.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
