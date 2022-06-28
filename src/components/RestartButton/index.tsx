import { wordleState } from "../../state/wordleState";
import styles from "./RestartButton.module.css";

const RestartButton = () => {
  const { resetGame } = wordleState();
  return (
    <button className={`button ${styles.main}`} onClick={resetGame}>
      Dame otra palabra!
    </button>
  );
};

export default RestartButton;
