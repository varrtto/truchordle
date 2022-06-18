import { wordleState } from "../../state/wordleState";
import styles from "./VictoryModal.module.css";

const VictoryModal = () => {
  const { setVictory, word } = wordleState();
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div
          className={`container is-clipped px-6 py-6 ${styles.container}`}
          style={{ backgroundColor: "white" }}
        >
          <h1 className="title is-2">Victoria!</h1>
          <h2 className="title is-3">La palabra era: {word}</h2>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => setVictory(false)}
      ></button>
    </div>
  );
};

export default VictoryModal;
