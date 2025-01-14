import React from "react";
import "./CoursesOfAction.css";

const CoursesOfAction = () => {
  return (
    <div className="courses-container">
      {/* Header Section */}
      <header className="courses-header">
        <h1>Our Initiatives</h1>
        <p>
          Discover how Team E-Cycle is revolutionizing e-waste management with
          impactful actions.
        </p>
      </header>

      {/* Section: Website */}
      <section className="action-section">
        <div className="section-content">
          <h2>The Website</h2>
          <p>
            A powerful tool designed to track e-bin locations and promote
            awareness about e-waste management. Features like an interactive
            map make it easier for individuals to locate the nearest e-bin and
            dispose of e-waste responsibly.
          </p>
        </div>
        <div className="section-image">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Website Preview"
            className="responsive-image"
          />
        </div>
      </section>

      {/* Section: E-Bins in Action */}
      <section className="action-section">
        <div className="section-content">
          <h2>E-Bins in Action</h2>
          <p>
            We deployed e-bins across corporate offices and residential areas to
            make e-waste disposal accessible and convenient. Here's the impact
            so far:
          </p>

          {/* Statistics Section */}
          <div className="stats-grid">
            <div className="stat-item">
              <h3>11</h3>
              <p>E-Bins Deployed</p>
            </div>
            <div className="stat-item">
              <h3>11</h3>
              <p>Locations Covered</p>
            </div>
            <div className="stat-item">
              <h3>350+ kg</h3>
              <p>E-Waste Collected</p>
            </div>
          </div>
        </div>
        <div className="section-image">
          <img
            src={`${process.env.PUBLIC_URL}/team8.jpg`}
            alt="E-Bins in Action"
            className="responsive-image"
          />
        </div>
      </section>

      {/* Section: Awareness */}
<section className="action-section awareness-section">
  <div className="section-content">
    <h2>Awareness Initiatives</h2>
    <p>
      Our team has undertaken various initiatives to spread awareness about
      e-waste management, including:
    </p>

    {/* Campaign Highlights */}
    <div className="campaign-grid">
      <div className="campaign-item">
        <h4>Seminars</h4>
        <p>
          Conducted seminars educating individuals and businesses on
          proper e-waste disposal.
        </p>
      </div>
      <div className="campaign-item">
        <h4>Webinars</h4>
        <p>
          Hosted 2 webinars, reaching a large
          audience.
        </p>
      </div>
      <div className="campaign-item">
        <h4>Posters</h4>
        <p>
          Designed creative posters placed in public areas to raise
          awareness.
        </p>
      </div>
    </div>
  </div>
  <div className="section-image large-image">
    <img
      src={`${process.env.PUBLIC_URL}/team6.jpg`}
      alt="Awareness Campaign"
      className="responsive-image"
    />
  </div>
</section>

    </div>
  );
};

export default CoursesOfAction;
