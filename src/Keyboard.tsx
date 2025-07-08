import { clsx } from "clsx";

export default function Keyboard(props: {
  currentWord: string;
  guessedLetters: string[];
  guessedLetterChange: (letter: string) => void;
}) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  return (
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
          >
            {alphabet.toUpperCase()}
          </button>
        );
      })}
    </section>
  );
}
