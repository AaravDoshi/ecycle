import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/logo.png`}
            alt="Team E-cycle"
            className="logo-image"
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bin-finder">Bin Finder</Link>
        </li>
        <li>
          <Link to="/courses-of-action">Courses of Action</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/awareness">Awareness</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
