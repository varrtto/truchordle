import { useEffect, useState } from "react";
import { wordleState } from "../../state/wordleState";
import styles from "./AttemptLetter.module.css";

interface Props {
  letter: string;
  line: number;
  position: number;
}

const AttemptLetter = (props: Props) => {
  const { letter, line, position } = props;
  const { attempts, attemptNumber, word } = wordleState();
  const [letterStatus, setLetterStatus] = useState("white");

  useEffect(() => {
    if (attemptNumber > 0 && line === attemptNumber - 1) {
      if (
        (word.includes(letter) &&
          word[position] === attempts[attemptNumber - 1][position]) ||
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
    <div
      className={`button mx-2 my-2 ${styles.letter} ${styles[letterStatus]}`}
    >
      {letter}
    </div>
  );
};

export default AttemptLetter;
