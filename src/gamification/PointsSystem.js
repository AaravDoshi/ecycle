import React, { useState } from 'react';
import './Gamification.css';

const PointsSystem = () => {
  const [points, setPoints] = useState(0);

  const badges = [
    { name: "Bronze Recycler", threshold: 50 },
    { name: "Silver Recycler", threshold: 100 },
    { name: "Gold Recycler", threshold: 200 },
  ];

  const earnedBadges = badges.filter((badge) => points >= badge.threshold);

  const handleRecycle = () => {
    setPoints(points + 10); // Add points for recycling
  };

  return (
    <div className="points-system">
      <h2>Your Points: {points}</h2>
      <button className="recycle-button" onClick={handleRecycle}>
        Log Recycling
      </button>
      <div className="badges">
        <h3>Earned Badges:</h3>
        {earnedBadges.length > 0 ? (
          earnedBadges.map((badge) => (
            <div key={badge.name} className="badge">
              {badge.name}
            </div>
          ))
        ) : (
          <p>No badges yet. Start recycling to earn them!</p>
        )}
      </div>
    </div>
  );
};

export default PointsSystem;
