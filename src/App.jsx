import { GameHeader } from "./components/GameHeader";
import { Card } from "./components/Card";
import { useGameLogic } from "./components/hooks/useGameLogic";

const cardValues = [
  "🍎","🍎",
  "🍌","🍌",
  "🍇","🍇",
  "🍉","🍉",
  "🍓","🍓",
  "🍍","🍍",
  "🥭","🥭",
  "🍒","🍒"
];

function App() {
  const { cards, score, moves, initializeGame, handleCardClick } =
    useGameLogic(cardValues);

  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      <div className="cards-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default App;