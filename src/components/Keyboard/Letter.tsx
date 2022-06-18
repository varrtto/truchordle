import { useEffect, useState } from "react";
import { wordleState } from "../../state/wordleState";
import styles from "./Letter.module.css";

interface Props {
  letter: string;
  onClick: (char: string) => void | (() => void);
  isEnter?: boolean;
  isDelete?: boolean;
}

const Letter = (props: Props) => {
  const { word, attempts, attemptNumber, victory, gameOver } = wordleState();
  const [letterStatus, setLetterStatus] = useState("white");
  const { letter, onClick, isEnter, isDelete } = props;

  useEffect(() => {
    if (attemptNumber > 0) {
      if (
        (word.includes(letter) &&
          word.indexOf(letter) ===
            attempts[attemptNumber - 1].indexOf(letter)) ||
        letterStatus === "green"
      ) {
        setLetterStatus("green");
      } else if (
        (word.includes(letter) &&
          attempts[attemptNumber - 1].includes(letter)) ||
        letterStatus === "yellow"
      ) {
        setLetterStatus("yellow");
      } else if (attempts[attemptNumber - 1].includes(letter)) {
        setLetterStatus("grey");
      }
    }
  }, [attemptNumber]);

  useEffect(() => {
    setLetterStatus("white");
  }, [word]);

  return (
    <button
      className={`column button mx-1 px-2 py-2 ${styles.box} ${
        styles[letterStatus]
      } ${isEnter && "is-success"} ${isDelete && "is-danger"}`}
      onClick={() => onClick(letter)}
      disabled={victory || gameOver}
    >
      {letter}
    </button>
  );
};

export default Letter;
