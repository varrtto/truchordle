import { wordleState } from "../../state/wordleState";

const RestartButton = () => {
  const { resetGame } = wordleState();
  return (
    <div className="button" onClick={resetGame}>
      Dame otra palabra!
    </div>
  );
};

export default RestartButton;
