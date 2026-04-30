export const WinMessage = ({ moves, onReset }) => {
  return (
    <div className="win-message">
      <h2>Congratulations!</h2>
      <p>You completed the game in {moves} moves!</p>
      <button className="reset-btn" onClick={onReset}>
        Play Again
      </button>
    </div>
  );
};