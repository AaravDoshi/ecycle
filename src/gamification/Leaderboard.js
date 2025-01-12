import React from 'react';
import './Gamification.css';

const Leaderboard = () => {
  const topRecyclers = [
    { name: "Alice", points: 300 },
    { name: "Bob", points: 250 },
    { name: "Charlie", points: 200 },
  ];

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ul>
        {topRecyclers.map((user, index) => (
          <li key={index}>
            {index + 1}. {user.name} - {user.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
