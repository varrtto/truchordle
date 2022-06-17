import { useMemo } from "react";
import { wordleState } from "../../state/wordleState";
import styles from "./Letter.module.css";

interface Props {
  letter: string;
  onClick: (char: string) => void | (() => void);
}

const Letter = (props: Props) => {
  const { word, attempts, attemptNumber, victory, gameOver } = wordleState();
  const { letter, onClick } = props;
  const status = useMemo(() => {
    if (attemptNumber > 0) {
      for (let i = 0; i < attemptNumber; i++) {
        if (
          word.includes(letter) &&
          word.indexOf(letter) === attempts[i].indexOf(letter)
        )
          return "green";
        if (word.includes(letter) && attempts[i].includes(letter))
          return "yellow";
        if (attempts[i].includes(letter)) return "grey";
      }
    }
    return "white";
  }, [attemptNumber, word, attempts]);

  return (
    <button
      className={`column button mx-1 px-2 py-2 ${styles.box} ${styles[status]}`}
      onClick={() => onClick(letter)}
      disabled={victory || gameOver}
    >
      {letter}
    </button>
  );
};

export default Letter;
