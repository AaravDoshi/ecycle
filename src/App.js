import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import Footer
import LandingPage from "./LandingPage";
import MapView from "./MapView";
import CoursesOfAction from "./CoursesOfAction";
import AboutUs from "./AboutUs";
import Awareness from "./Awareness";

function App() {
  // GitHub Pages project sites are served under /<repository>/, not the domain root.
  const basePath = new URL(process.env.PUBLIC_URL || "/", window.location.origin).pathname.replace(/\/$/, "") || "/";

  return (
    <Router basename={basePath}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bin-finder" element={<MapView />} />
        <Route path="/courses-of-action" element={<CoursesOfAction />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/awareness" element={<Awareness />} />
      </Routes>
      <Footer /> {/* Add Footer */}
    </Router>
  );
}

export default App;
