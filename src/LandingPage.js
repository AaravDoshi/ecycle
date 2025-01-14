import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const images = [
    "team1.jpg",
    "team3.jpg",
    "team4.jpg",
    "team5.jpg",
    "team8.jpg",
    "team7.jpg",
  ];

  return (
    <div className="landing-page">
      {/* Main Image */}
      <div className="main-image">
        <img
          src={`${process.env.PUBLIC_URL}/team2.jpg`}
          alt="Team Activity Main"
        />
      </div>

      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to Team E-Cycle's Website</h1>
        <p className="welcome-subtitle">
          Explore our journey and initiatives to promote sustainable e-waste
          management.
        </p>
      </div>

      {/* Collage Section */}
      <div className="image-grid">
        {images.map((src, index) => (
          <div className="grid-item" key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/${src}`}
              alt={`Team Activity ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
