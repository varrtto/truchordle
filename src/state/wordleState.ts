import create from "zustand";
import { selectRandomWord } from "../utils";

type State = {
  gameOver: boolean;
  victory: boolean;
  word: string;
  attempts: string[][];
  attemptNumber: number;
  resetGame: () => void;
  increaseAttemptNumber: () => void;
  setWord: (newWord: string) => void;
  setGameOver: (value: boolean) => void;
  setVictory: (value: boolean) => void;
  addLetter: (letter: string) => void;
  removeLetter: () => void;
};

export const wordleState = create<State>((set) => ({
  word: selectRandomWord(),
  gameOver: false,
  victory: false,
  attempts: [[], [], [], [], []],
  attemptNumber: 0,
  resetGame: () =>
    set({
      word: selectRandomWord(),
      gameOver: false,
      attempts: [[], [], [], [], []],
      attemptNumber: 0,
    }),
  increaseAttemptNumber: () =>
    set((state: State) => ({ attemptNumber: state.attemptNumber + 1 })),
  setWord: (newWord: string) => set(() => ({ word: newWord })),
  setGameOver: (value: boolean) => set(() => ({ gameOver: value })),
  setVictory: (value: boolean) => set(() => ({ victory: value })),
  addLetter: (letter: string) =>
    set((state: State) => {
      state.attempts[state.attemptNumber].push(letter);
      return {
        attempts: state.attempts,
      };
    }),
  removeLetter: () =>
    set((state: State) => {
      state.attempts[state.attemptNumber].pop();
      return {
        attempts: state.attempts,
      };
    }),
}));
