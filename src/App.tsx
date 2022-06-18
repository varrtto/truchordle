import { wordleState } from "./state/wordleState";
import "./App.css";
import Keyboard from "./components/Keyboard";
import GameOverModal from "./components/GameOverModal";
import AttemptsDisplay from "./components/AttemptsDisplay";
import RestartButton from "./components/RestartButton";
import VictoryModal from "./components/VictoryModal";
import Navbar from "./components/Navbar";

const App = () => {
  const { word, gameOver, victory, showWord } = wordleState();

  return (
    <div className="App">
      {gameOver && <GameOverModal />}
      {victory && <VictoryModal />}
      <Navbar />
      <div className="container is-fluid">
        <h1 className="title is-1 py-2">Truchordle</h1>
        {showWord && <h2>{word}</h2>}
        <AttemptsDisplay />
        <Keyboard />
        <RestartButton />
      </div>
    </div>
  );
};

export default App;
