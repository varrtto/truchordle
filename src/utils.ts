import { data } from "./words";

export const selectRandomWord = (gameType: string) => {
  const newData = data.filter((word: any) => word.length === 5);
  const randomNumber = Math.floor(Math.random() * (newData.length - 1 + 1) + 1);
  return newData[randomNumber].toUpperCase();
};
