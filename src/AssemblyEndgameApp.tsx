import Header from "./Header";
import GameStatus from "./GameStatus";
import LanguagesList from "./LanguagesList";
import { useState } from "react";
import Input from "./Input";
import Keyboard from "./Keyboard";

function AssemblyEndgameApp() {
  const [currentWord, setCurrentWord] = useState<string>("react");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const handleGuessedLetterChange = (letter: string) => {
    setGuessedLetters((existingLetters) => {
      return existingLetters.includes(letter)
        ? existingLetters
        : [...existingLetters, letter];
    });
  };

  return (
    <>
      <Header />
      <GameStatus />
      <LanguagesList />
      <Input currentWord={currentWord} />
      <Keyboard guessedLetterChange={handleGuessedLetterChange} />
      <button type="button" className="new-game-btn">
        New Game
      </button>
    </>
  );
}

export default AssemblyEndgameApp;
