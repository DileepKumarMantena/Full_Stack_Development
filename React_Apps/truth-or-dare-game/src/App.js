import React, { useState, useRef } from 'react';
import './App.css';
import Player from '../src/player.js';
import Card from '../src/card.js';
import arrow from '../src/arrow.png';

const truthCards = [
  "What's your biggest fear?",
  "What's your most embarrassing moment?",
  "What's the craziest thing you've ever done?",
  // Add more truth cards as needed
];

const dareCards = [
  "Do 10 pushups.",
  "Sing a song loudly.",
  "Act like a monkey for 1 minute.",
  // Add more dare cards as needed
];

const App = () => {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(null);
  const [currentCard, setCurrentCard] = useState(null);
  const [cardType, setCardType] = useState('');
  const [customQuestion, setCustomQuestion] = useState('');
  const [players, setPlayers] = useState(['a','b','c','d','e','f','g']); // Add more players as needed
  const [isRotating, setIsRotating] = useState(false);
  const [rotateDegrees, setRotateDegrees] = useState(0);

  const rotateIntervalRef = useRef(null);

  const getRandomCard = (cards) => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  };

  const getRandomPlayerIndex = () => {
    return Math.floor(Math.random() * players.length);
  };

  const handleSelectType = (type) => {
    setCardType(type);
    const selectedCards = type === 'truth' ? truthCards : dareCards;
    setCurrentCard(getRandomCard(selectedCards));
  };

  const handleCustomQuestionSubmit = (event) => {
    event.preventDefault();
    if (customQuestion.trim() !== '') {
      setCurrentCard(customQuestion.trim());
      setCustomQuestion('');
    }
  };

  const startRotation = () => {
    setIsRotating(true);
    rotateIntervalRef.current = setInterval(() => {
      setRotateDegrees((prevDegrees) => prevDegrees + 10); // Increase rotation speed by changing the increment value
    }, 50); // Adjust rotation speed by changing the interval value
  };

  const stopRotation = () => {
    clearInterval(rotateIntervalRef.current);
    setIsRotating(false);
    const stopDegrees = rotateDegrees % 360;
    const stopIndex = Math.floor((stopDegrees / 360) * players.length);
    setCurrentPlayerIndex(stopIndex);
  };

  const toggleRotation = () => {
    if (isRotating) {
      stopRotation();
    } else {
      startRotation();
    }
  };

  return (
    <div className="container">
      <h1>Truth or Dare</h1>
      <Player name={currentPlayerIndex !== null ? players[currentPlayerIndex] : 'Random Player'} />
      <Card card={currentCard} />
      <div className="arrow-container">
        <img
          src={arrow}
          alt="Arrow"
          className={`arrow ${isRotating ? 'rotate' : ''}`}
          style={{ transform: `rotate(${rotateDegrees}deg)` }}
          onClick={toggleRotation} // Toggle rotation on arrow click
        />
      </div>
      <div className="button-group">
        <select onChange={(e) => handleSelectType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="truth">Truth</option>
          <option value="dare">Dare</option>
        </select>
      </div>
      <form onSubmit={handleCustomQuestionSubmit}>
        <input
          type="text"
          value={customQuestion}
          onChange={(e) => setCustomQuestion(e.target.value)}
          placeholder="Ask a Question"
          disabled={cardType !== ''}
        />
        <button type="submit" disabled={cardType !== ''}>Ask</button>
      </form>
    </div>
  );
};

export default App;
