import React, { useState } from 'react';
import './App.css';
import Player from '../src/player.js'
import Card from '../src/card.js'

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
  const [players, setPlayers] = useState(['Dileep', 'Pradeep ', 'Kumar']); // Add more players as needed

  const getRandomCard = (cards) => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
  };

  const getRandomPlayerIndex = () => {
    return Math.floor(Math.random() * players.length);
  };

  const handleNextTurn = () => {
    const randomPlayerIndex = getRandomPlayerIndex();
    setCurrentPlayerIndex(randomPlayerIndex);
    setCurrentCard(null);
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

  return (
    <div className="container">
      <h1>Truth or Dare</h1>
      <Player name={currentPlayerIndex !== null ? players[currentPlayerIndex] : 'Random Player'} />
      <Card card={currentCard} />
      <div className="button-group">
        <button onClick={handleNextTurn}>Next Turn</button>
        <button onClick={() => handleSelectType('truth')}>Truth</button>
        <button onClick={() => handleSelectType('dare')}>Dare</button>
      </div>
      <form onSubmit={handleCustomQuestionSubmit}>
        <input
          type="text"
          value={customQuestion}
          onChange={(e) => setCustomQuestion(e.target.value)}
          placeholder="Ask a custom question..."
        />
        <button type="submit">Ask</button>
      </form>
    </div>
  );
};

export default App;
