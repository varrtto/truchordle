import { wordleState } from "../../state/wordleState";

const VictoryModal = () => {
  const { setVictory } = wordleState();
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div
          className="container is-clipped"
          style={{ backgroundColor: "white" }}
        >
          <h1 className="title is-2">Victoria!</h1>
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
