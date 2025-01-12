import React, { useState, useEffect } from 'react';
import './MiniGames.css';

// Full list of items
const allItems = [
  { id: 1, name: 'Battery', type: 'battery' },
  { id: 2, name: 'Old Phone', type: 'electronics' },
  { id: 3, name: 'Laptop', type: 'electronics' },
  { id: 4, name: 'Wires', type: 'electronics' },
  { id: 5, name: 'Broken Light', type: 'other' },
  { id: 6, name: 'Headphones', type: 'electronics' },
  { id: 7, name: 'Power Bank', type: 'battery' },
  { id: 8, name: 'Tablet', type: 'electronics' },
  { id: 9, name: 'Speaker', type: 'electronics' },
  { id: 10, name: 'Charger', type: 'electronics' },
  { id: 11, name: 'Remote', type: 'electronics' },
  { id: 12, name: 'Electric Shaver', type: 'electronics' },
  { id: 13, name: 'Smart Watch', type: 'electronics' },
  { id: 14, name: 'Cables', type: 'electronics' },
  { id: 15, name: 'Mouse', type: 'electronics' },
  { id: 16, name: 'Keyboard', type: 'electronics' },
  { id: 17, name: 'Power Strip', type: 'electronics' },
  { id: 18, name: 'Battery Pack', type: 'battery' },
  { id: 19, name: 'Camera', type: 'electronics' },
  { id: 20, name: 'DVD Player', type: 'electronics' },
  { id: 21, name: 'Flash Drive', type: 'electronics' },
  { id: 22, name: 'Projector', type: 'electronics' },
  { id: 23, name: 'VR Headset', type: 'electronics' },
  { id: 24, name: 'Game Console', type: 'electronics' },
  { id: 25, name: 'Drone', type: 'electronics' },
  { id: 26, name: 'Bluetooth Speaker', type: 'electronics' },
  { id: 27, name: 'TV Remote', type: 'electronics' },
  { id: 28, name: 'Old Printer', type: 'electronics' },
  { id: 29, name: 'Scanner', type: 'electronics' },
  { id: 30, name: 'Graphic Tablet', type: 'electronics' },
  { id: 31, name: 'Smart Glasses', type: 'electronics' },
  { id: 32, name: 'Electric Toothbrush', type: 'electronics' },
  { id: 33, name: 'Hair Dryer', type: 'electronics' },
  { id: 34, name: 'Coffee Machine', type: 'other' },
  { id: 35, name: 'Iron', type: 'electronics' },
  { id: 36, name: 'Blender', type: 'other' },
  { id: 37, name: 'Fan', type: 'electronics' },
  { id: 38, name: 'Router', type: 'electronics' },
  { id: 39, name: 'Modem', type: 'electronics' },
  { id: 40, name: 'Heat Lamp', type: 'other' },
  { id: 41, name: 'Projector Screen', type: 'other' },
  { id: 42, name: 'Extension Cord', type: 'electronics' },
  { id: 43, name: 'Alarm Clock', type: 'electronics' },
  { id: 44, name: 'Digital Thermometer', type: 'electronics' },
  { id: 45, name: 'Electric Razor', type: 'electronics' },
  { id: 46, name: 'Hand Mixer', type: 'other' },
  { id: 47, name: 'Vacuum Cleaner', type: 'other' },
  { id: 48, name: 'Toaster', type: 'other' },
  { id: 49, name: 'Microwave', type: 'other' },
  { id: 50, name: 'Refrigerator', type: 'other' },
];

// Bins
const bins = [
  { id: 'battery', label: 'Battery Bin' },
  { id: 'electronics', label: 'Electronics Bin' },
  { id: 'other', label: 'Other Waste' },
];

// Function to shuffle the items
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const SortEwaste = () => {
  const [items, setItems] = useState([]);
  const [correctDrops, setCorrectDrops] = useState(0);
  const [timer, setTimer] = useState(60); // 60 seconds timer
  const [gameStarted, setGameStarted] = useState(false); // Tracks if the game has started
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setItems(shuffleArray(allItems).slice(0, 10)); // Shuffle and select 10 random items
  }, []);

  useEffect(() => {
    if (gameStarted && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setGameOver(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [gameStarted, timer]);

  const handleStartGame = () => {
    setGameStarted(true);
    setTimer(60); // Reset timer to 60 seconds
    setCorrectDrops(0); // Reset score
    setGameOver(false); // Reset game-over state
  };

  const handleDrop = (item, bin) => {
    if (item.type === bin) {
      setCorrectDrops((prev) => prev + 1);
    }
  };

  if (!gameStarted) {
    return (
      <div className="game-section">
        <h2>Sort the E-Waste</h2>
        <p>Click "Start Game" to begin. You have 60 seconds to sort as much e-waste as possible!</p>
        <button onClick={handleStartGame} className="recycle-button">
          Start Game
        </button>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="game-section">
        <h2>Game Over!</h2>
        <h3>You sorted {correctDrops} items correctly!</h3>
        <button onClick={handleStartGame} className="recycle-button">
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="game-section">
      <h2>Sort the E-Waste</h2>
      <p>Time Remaining: {timer} seconds</p>
      <div className="game-grid">
        {/* E-Waste Items */}
        <div className="items">
          <h3>E-Waste Items</h3>
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => e.dataTransfer.setData('text/plain', JSON.stringify(item))}
              className="game-item"
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Bins */}
        <div className="bins">
          <h3>Bins</h3>
          {bins.map((bin) => (
            <div
              key={bin.id}
              onDrop={(e) => {
                const item = JSON.parse(e.dataTransfer.getData('text/plain'));
                handleDrop(item, bin.id);
              }}
              onDragOver={(e) => e.preventDefault()}
              className="game-bin"
            >
              {bin.label}
            </div>
          ))}
        </div>
      </div>

      {/* Score */}
      <h4>Correct Drops: {correctDrops}</h4>
    </div>
  );
};

export default SortEwaste;
