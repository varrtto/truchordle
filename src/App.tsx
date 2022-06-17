import { wordleState } from "./state/wordleState";
import "./App.css";
import Keyboard from "./components/Keyboard";
import GameOverModal from "./components/GameOverModal";
import AttemptsDisplay from "./components/AttemptsDisplay";
import GameOverButton from "./components/GameOverButton";
import VictoryModal from "./components/VictoryModal";

const App = () => {
  const { word, gameOver, victory } = wordleState();

  return (
    <div className="App">
      {gameOver && <GameOverModal />}
      {victory && <VictoryModal />}
      <div className="container is-fluid">
        <h1 className="title is-1 py-2">Wordle</h1>
        <h2>{word}</h2>
        <AttemptsDisplay />
        <Keyboard />
        <GameOverButton />
      </div>
    </div>
  );
};

export default App;