import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import MapView from './MapView';
import Awareness from './Awareness';
import AboutUs from './AboutUs'; // Update the path if necessary

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bin-finder" element={<MapView />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/about-us" element={<AboutUs />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
