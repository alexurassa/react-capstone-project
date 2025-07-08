import Header from "./Header";
import GameStatus from "./GameStatus";
import LanguagesList from "./LanguagesList";
import { useState } from "react";
import { languages } from "./languages";
import Input from "./Input";
import Keyboard from "./Keyboard";

function AssemblyEndgameApp() {
  // State variables
  const [currentWord, setCurrentWord] = useState<string>("react");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // Derived values
  const wrongGuessCount = guessedLetters.filter(
    (guessedLetter) => !currentWord.includes(guessedLetter)
  ).length;
  const numGuessesLeft = languages.length - 1 - wrongGuessCount;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);
  console.log("isLastGuessCorrect", isLastGuessIncorrect);

  console.log("wrong guess count: ", wrongGuessCount);

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
      <GameStatus
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        lastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />
      <LanguagesList wrongGuessCount={wrongGuessCount} />
      <Input currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        guessedLetterChange={handleGuessedLetterChange}
        gameOver={isGameOver}
        numGuessesLeft={numGuessesLeft}
        lastGuessedLetter={lastGuessedLetter}
      />
      {isGameOver && (
        <button type="button" className="new-game-btn">
          New Game
        </button>
      )}
    </>
  );
}

export default AssemblyEndgameApp;
