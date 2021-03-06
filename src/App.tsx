import { wordleState } from "./state/wordleState";
import "./App.css";
import Keyboard from "./components/Keyboard";
import GameOverModal from "./components/GameOverModal";
import AttemptsDisplay from "./components/AttemptsDisplay";
import RestartButton from "./components/RestartButton";
import VictoryModal from "./components/VictoryModal";
import Navbar from "./components/Navbar";

import styles from "./App.module.css";

const App = () => {
  const { word, gameOver, victory, showWord } = wordleState();

  return (
    <div className="App">
      {gameOver && <GameOverModal />}
      {victory && <VictoryModal />}
      <Navbar />
      <div
        className={`container is-fluid ${styles.main} is-flex is-flex-direction-column is-align-content-space-evenly py-3`}
      >
        <h1 className="title is-1 py-2">Truchordle</h1>
        <AttemptsDisplay />
        {showWord && <h2 className="pb-2">La palabra era: {word}</h2>}
        {showWord && <RestartButton />}
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
