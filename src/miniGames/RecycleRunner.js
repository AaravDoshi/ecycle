import React, { useRef, useEffect, useState } from "react";
import "./RecycleRunner.css";

const RecycleRunner = () => {
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);

  const scoreRef = useRef(score);
  const livesRef = useRef(lives);

  const lanes = [150, 300, 450];
  const collectibles = useRef([]);
  const obstacles = useRef([]);
  const animationFrameId = useRef(null);

  const randomEwasteImages = [
    "https://cdn.pixabay.com/photo/2014/10/02/17/24/hard-drive-469641_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/14/00/electronics-1839856_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/05/07/13/13/motherboard-5144654_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/07/12/18/39/hard-disk-153412_1280.png",
  ];

  const player = {
    lane: 1, // Start in the middle lane
    width: 50,
    height: 50,
    image: new Image(),
  };
  player.image.src = "https://cdn-icons-png.flaticon.com/512/78/78785.png";

  const spawnCollectible = () => {
    const collectible = {
      x: lanes[Math.floor(Math.random() * 3)],
      y: 0,
      width: 30,
      height: 30,
      speed: 4,
      image: new Image(),
      loaded: false,
    };

    collectible.image.onload = () => {
      collectible.loaded = true; // Mark as loaded
    };
    collectible.image.src =
      randomEwasteImages[
        Math.floor(Math.random() * randomEwasteImages.length)
      ];

    collectibles.current.push(collectible);
  };

  const spawnObstacle = () => {
    const obstacle = {
      x: lanes[Math.floor(Math.random() * 3)], // Random lane
      y: 0, // Start at the top of the canvas
      width: 40,
      height: 40,
      speed: 4,
      image: new Image(),
      loaded: false,
    };
  
    obstacle.image.onload = () => {
      obstacle.loaded = true; // Mark as loaded
      console.log("Obstacle image loaded:", obstacle.image.src); // Debug log
    };
  
    obstacle.image.src =
      randomEwasteImages[
        Math.floor(Math.random() * randomEwasteImages.length)
      ];
  
    console.log("Spawning obstacle:", obstacle); // Debug log
    obstacles.current.push(obstacle);
  };
  
  const updateObstacles = (ctx, canvasHeight) => {
    obstacles.current.forEach((obstacle, index) => {
      obstacle.y += obstacle.speed; // Move obstacle down the screen
      console.log("Updating obstacle position:", obstacle); // Debug log
  
      if (obstacle.loaded) {
        ctx.drawImage(
          obstacle.image,
          obstacle.x - obstacle.width / 2,
          obstacle.y,
          obstacle.width,
          obstacle.height
        );
      }
  
      // Check for collision with the player
      if (
        obstacle.y > canvasHeight - player.height - 20 &&
        obstacle.x === lanes[player.lane]
      ) {
        obstacles.current.splice(index, 1);
        livesRef.current -= 1;
        setLives(livesRef.current);
        if (livesRef.current <= 0) {
          setGameOver(true);
        }
      }
  
      // Remove if out of bounds
      if (obstacle.y > canvasHeight) {
        obstacles.current.splice(index, 1);
      }
    });
  };
  

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft" && player.lane > 0) player.lane -= 1;
    if (e.key === "ArrowRight" && player.lane < 2) player.lane += 1;
  };

  const updateGame = (ctx, canvasHeight) => {
    if (gameOver) return;

    ctx.clearRect(0, 0, ctx.canvas.width, canvasHeight);

    // Draw background
    ctx.fillStyle = "#E0F7FA"; // Light blue background
    ctx.fillRect(0, 0, ctx.canvas.width, canvasHeight);

    // Simulate road and lanes
    ctx.fillStyle = "#BDBDBD";
    ctx.fillRect(100, 0, ctx.canvas.width - 200, canvasHeight);

    // Lane dividers
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 4;
    for (let i = 1; i < 3; i++) {
      ctx.setLineDash([20, 15]);
      ctx.beginPath();
      ctx.moveTo(100 + i * 150, 0);
      ctx.lineTo(100 + i * 150, canvasHeight);
      ctx.stroke();
    }

    // Draw player
    ctx.drawImage(
      player.image,
      lanes[player.lane] - player.width / 2,
      canvasHeight - player.height - 20,
      player.width,
      player.height
    );

    // Update collectibles
    collectibles.current.forEach((item, index) => {
      item.y += item.speed;
      if (item.loaded) {
        ctx.drawImage(
          item.image,
          item.x - item.width / 2,
          item.y,
          item.width,
          item.height
        );
      }

      // Check for collection
      if (
        item.y > canvasHeight - player.height - 20 &&
        item.x === lanes[player.lane]
      ) {
        collectibles.current.splice(index, 1);
        scoreRef.current += 10;
        setScore(scoreRef.current);
      }

      // Remove if out of bounds
      if (item.y > canvasHeight) {
        collectibles.current.splice(index, 1);
      }
    });

    // Update obstacles
    obstacles.current.forEach((obstacle, index) => {
      obstacle.y += obstacle.speed;
      if (obstacle.loaded) {
        ctx.drawImage(
          obstacle.image,
          obstacle.x - obstacle.width / 2,
          obstacle.y,
          obstacle.width,
          obstacle.height
        );
      }

      // Check for collision
      if (
        obstacle.y > canvasHeight - player.height - 20 &&
        obstacle.x === lanes[player.lane]
      ) {
        obstacles.current.splice(index, 1);
        livesRef.current -= 1;
        setLives(livesRef.current);
        if (livesRef.current <= 0) {
          setGameOver(true);
        }
      }

      // Remove if out of bounds
      if (obstacle.y > canvasHeight) {
        obstacles.current.splice(index, 1);
      }
    });

    // Draw score and lives
    ctx.fillStyle = "#000";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${scoreRef.current}`, 20, 30);
    ctx.fillText(`Lives: ${livesRef.current}`, 20, 60);

    animationFrameId.current = requestAnimationFrame(() =>
      updateGame(ctx, canvasHeight)
    );
  };

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const canvasHeight = 400;

    const intervalId = setInterval(() => {
      spawnCollectible();
      spawnObstacle();
    }, 1500);

    scoreRef.current = score;
    livesRef.current = lives;

    updateGame(ctx, canvasHeight);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [gameStarted, gameOver]);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setLives(3);
    setGameOver(false);
    collectibles.current = [];
    obstacles.current = [];
  };

  return (
    <div className="runner-container">
      {!gameStarted && (
        <div className="runner-start">
          <h1>E-Waste Dash</h1>
          <button className="runner-button" onClick={startGame}>
            Start Game
          </button>
        </div>
      )}
      {gameStarted && (
        <canvas
          ref={canvasRef}
          className="runner-canvas"
          width="600"
          height="400"
        ></canvas>
      )}
      {gameOver && (
        <div className="runner-overlay">
          <h2>Game Over!</h2>
          <p>Your Score: {score}</p>
          <button className="runner-button" onClick={startGame}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default RecycleRunner;
