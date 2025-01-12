import React from 'react';
import './Gamification.css';
import Leaderboard from './Leaderboard';
import PointsSystem from './PointsSystem';
import MiniGames from '../miniGames/MiniGames';

const Gamification = () => {
  return (
    <div className="gamification-container">
      <h1 className="gamification-title">Gamify Your Recycling Journey</h1>
      <p className="gamification-description">
        Join Team E-Cycle in making a difference! Earn points, unlock badges, and compete with others to lead the way in e-waste management.
      </p>

      {/* Points System */}
      <div className="points-system">
        <PointsSystem />
      </div>

      {/* Leaderboard */}
      <div className="leaderboard">
        <Leaderboard />
      </div>

      {/* Mini-Games */}
      <div className="mini-games">
        <MiniGames />
      </div>
    </div>
  );
};

export default Gamification;
