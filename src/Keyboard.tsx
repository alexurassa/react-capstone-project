import { clsx } from "clsx";

export default function Keyboard(props: {
  currentWord: string;
  guessedLetters: string[];
  gameOver: boolean;
  numGuessesLeft: number;
  lastGuessedLetter: string;
  guessedLetterChange: (letter: string) => void;
}) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  return (
    <>
      <section aria-live="polite" role="status" className="sr-only">
        <p>
          {
            props.currentWord.includes(props.lastGuessedLetter) ? 
            `Correct! the letter ${props.lastGuessedLetter} is in the word.` :
            `Wrong! the letter ${props.lastGuessedLetter} is not in the word.`
          }
          You have {props.numGuessesLeft} attempts left.
        </p>
        <p>
          Current word:{" "}
          {props.currentWord
            .split("")
            .map((letter) =>
              props.guessedLetters.includes(letter) ? letter + "." : "blank."
            )
            .join(" ")}
        </p>
      </section>

      <section className="keyboard">
        {alphabets.split("").map((alphabet, indx) => {
          const isGuessed = props.guessedLetters.includes(alphabet);
          const isCorrect = isGuessed && props.currentWord.includes(alphabet);
          const isWrong = isGuessed && !props.currentWord.includes(alphabet);

          const btnStatusClass = clsx("keyboard-btn", {
            correct: isCorrect,
            wrong: isWrong,
          });

          return (
            <button
              type="button"
              className={btnStatusClass}
              key={indx}
              aria-label={"Letter " + alphabet + " button"}
              onClick={() => props.guessedLetterChange(alphabet)}
              disabled={props.gameOver}
              aria-disabled={props.guessedLetters.includes(alphabet)}
              aria-label={`Letter ${alphabet}`}
            >
              {alphabet.toUpperCase()}
            </button>
          );
        })}
      </section>
    </>
  );
}
