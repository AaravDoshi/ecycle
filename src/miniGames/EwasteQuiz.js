import React, { useState } from 'react';
import './MiniGames.css';

const EwasteQuiz = () => {
  const questions = [
    {
      question: 'What is the most common type of e-waste?',
      options: ['Phones', 'Batteries', 'Cables', 'Televisions'],
      answer: 'Phones',
    },
    {
      question: 'Which material in e-waste is hazardous?',
      options: ['Plastic', 'Glass', 'Lead', 'Copper'],
      answer: 'Lead',
    },
    {
      question: 'What percentage of e-waste is currently recycled globally?',
      options: ['10%', '20%', '50%', '70%'],
      answer: '20%',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="game-section">
      <h2>E-Waste Quiz</h2>
      {showScore ? (
        <h3>Your Score: {score}/{questions.length}</h3>
      ) : (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option) => (
              <button key={option} onClick={() => handleAnswerClick(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EwasteQuiz;
