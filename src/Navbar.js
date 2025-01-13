import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Team E-Cycle</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses of Action</Link>
        <Link to="/bin-finder">Find an E-bin</Link>
      </div>
    </nav>
  );
};

export default Navbar;
