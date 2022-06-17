import { useMemo } from "react";
import { wordleState } from "../../state/wordleState";
import styles from "./AttemptLetter.module.css";

interface Props {
  letter: string;
}

const AttemptLetter = (props: Props) => {
  const { letter } = props;
  const { attempts, attemptNumber, word } = wordleState();

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

  return <div className={`button mx-2 my-2 ${styles[status]}`}>{letter}</div>;
};

export default AttemptLetter;
