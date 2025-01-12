import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-title">Team E-Cycle</h1>
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </button>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/bin-finder" className="navbar-link">Bin Finder</Link>
          <Link to="/awareness" className="navbar-link">Awareness</Link>
          <Link to="/gamification" className="navbar-link">Games</Link>
          <Link to="/about-us">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
