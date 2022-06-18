import { wordleState } from "../../state/wordleState";
import Letter from "./Letter";

const Keyboard = () => {
  const {
    attemptNumber,
    addLetter,
    removeLetter,
    attempts,
    word,
    increaseAttemptNumber,
    setGameOver,
    setVictory,
    setShowWord,
  } = wordleState();

  const handleValidation = () => {
    if (attempts[attemptNumber].join("") === word) {
      setVictory(true);
      setShowWord(true);
    } else {
      if (attemptNumber === 4) {
        setGameOver(true);
        setShowWord(true);
      }
    }
    increaseAttemptNumber();
  };

  const onClick = (char: string) => {
    if (attempts[attemptNumber].length >= 5) {
      return;
    }
    addLetter(char);
  };

  const onDelete = () => {
    if (attempts[attemptNumber].length === 0) {
      return;
    }
    removeLetter();
  };

  const onEnter = () => {
    if (attempts[attemptNumber].length < 5) {
      return;
    }
    handleValidation();
  };
  return (
    <div className="container is-fluid px-1 py-1">
      <div className="columns is-mobile ">
        <Letter letter="Q" onClick={onClick} />
        <Letter letter="W" onClick={onClick} />
        <Letter letter="E" onClick={onClick} />
        <Letter letter="R" onClick={onClick} />
        <Letter letter="T" onClick={onClick} />
        <Letter letter="Y" onClick={onClick} />
        <Letter letter="U" onClick={onClick} />
        <Letter letter="I" onClick={onClick} />
        <Letter letter="O" onClick={onClick} />
        <Letter letter="P" onClick={onClick} />
      </div>
      <div className="columns is-mobile ">
        <Letter letter="A" onClick={onClick} />
        <Letter letter="S" onClick={onClick} />
        <Letter letter="D" onClick={onClick} />
        <Letter letter="F" onClick={onClick} />
        <Letter letter="G" onClick={onClick} />
        <Letter letter="H" onClick={onClick} />
        <Letter letter="J" onClick={onClick} />
        <Letter letter="K" onClick={onClick} />
        <Letter letter="L" onClick={onClick} />
        <Letter letter="Ñ" onClick={onClick} />
      </div>
      <div className="columns is-mobile">
        <Letter letter="↵" onClick={onEnter} isEnter />
        <Letter letter="Z" onClick={onClick} />
        <Letter letter="X" onClick={onClick} />
        <Letter letter="C" onClick={onClick} />
        <Letter letter="V" onClick={onClick} />
        <Letter letter="B" onClick={onClick} />
        <Letter letter="N" onClick={onClick} />
        <Letter letter="M" onClick={onClick} />
        <Letter letter="⌫" onClick={onDelete} isDelete />
      </div>
    </div>
  );
};

export default Keyboard;
