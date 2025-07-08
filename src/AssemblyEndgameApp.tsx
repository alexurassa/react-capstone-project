import Header from "./Header";
import GameStatus from "./GameStatus";
import LanguagesList from "./LanguagesList";
import { useState } from "react";
import { languages } from "./languages";
import Input from "./Input";
import Keyboard from "./Keyboard";
import getRandomWord from "./utils";
import ReactConfetti from "react-confetti";

function AssemblyEndgameApp() {
  // State variables
  const [currentWord, setCurrentWord] = useState<string>(() => getRandomWord());
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
    lastGuessedLetter !== undefined && !currentWord.includes(lastGuessedLetter);

  const handleGuessedLetterChange = (letter: string) => {
    setGuessedLetters((existingLetters) => {
      return existingLetters.includes(letter)
        ? existingLetters
        : [...existingLetters, letter];
    });
  };

  function resetTheGame() {
    setCurrentWord(getRandomWord()); // choose another random word
    setGuessedLetters([]); // reset guessed letters to empty array
  }

  return (
    <>
      {isGameOver && isGameWon && (
        <ReactConfetti recycle={false} numberOfPieces={1000} />
      )}
      <Header />
      <GameStatus
        isGameOver={isGameOver}
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        lastGuessIncorrect={isLastGuessIncorrect}
        wrongGuessCount={wrongGuessCount}
      />
      <LanguagesList wrongGuessCount={wrongGuessCount} />
      <Input
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        gameLost={isGameLost}
      />
      <Keyboard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        guessedLetterChange={handleGuessedLetterChange}
        gameOver={isGameOver}
        numGuessesLeft={numGuessesLeft}
        lastGuessedLetter={lastGuessedLetter}
      />
      {isGameOver && (
        <button type="button" className="new-game-btn" onClick={resetTheGame}>
          New Game
        </button>
      )}
    </>
  );
}

export default AssemblyEndgameApp;
