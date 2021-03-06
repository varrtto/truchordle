import { wordleState } from "../../state/wordleState";
import AttemptLetter from "./AttemptLetter";

interface Props {
  line: number;
}

const AttemptDisplay = (props: Props) => {
  const { line } = props;
  const { attempts } = wordleState();

  const letter1 = attempts && attempts[line][0];
  const letter2 = attempts && attempts[line][1];
  const letter3 = attempts && attempts[line][2];
  const letter4 = attempts && attempts[line][3];
  const letter5 = attempts && attempts[line][4];

  return (
    <div className="container is-flex is-flex-direction-row is-justify-content-space-between">
      <AttemptLetter letter={letter1} line={line} position={0} />
      <AttemptLetter letter={letter2} line={line} position={1} />
      <AttemptLetter letter={letter3} line={line} position={2} />
      <AttemptLetter letter={letter4} line={line} position={3} />
      <AttemptLetter letter={letter5} line={line} position={4} />
    </div>
  );
};

export default AttemptDisplay;
