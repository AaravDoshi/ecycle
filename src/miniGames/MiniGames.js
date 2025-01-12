import React from 'react';
import './MiniGames.css';
import SortEwaste from './SortEwaste';
import EwasteQuiz from './EwasteQuiz';
import RecycleRunner from './RecycleRunner';
import EcoSortingChallenge from './EcoSortingChallenge';

const MiniGames = () => {
  return (
    <div className="mini-games-container">
      <h1 className="mini-games-title">Mini-Games</h1>
      <p className="mini-games-description">
        Engage in fun and educational games to learn about e-waste recycling!
      </p>
      <div className="mini-games-list">
        <div className="mini-game-card">
          <SortEwaste />
        </div>
        <div className="mini-game-card">
          <EwasteQuiz />
        </div>
        <div className="mini-game-card">
          <RecycleRunner />
        </div>
        <div className="mini-game-card">
          <EcoSortingChallenge />
        </div>
      </div>
    </div>
  );
};

export default MiniGames;
