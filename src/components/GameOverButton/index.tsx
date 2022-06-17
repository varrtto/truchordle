import { wordleState } from "../../state/wordleState";

const GameOverButton = () => {
  const { resetGame } = wordleState();
  return (
    <div className="button" onClick={resetGame}>
      REINICIAR
    </div>
  );
};

export default GameOverButton;
