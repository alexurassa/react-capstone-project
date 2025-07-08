import clsx from "clsx";

export default function Input(props: {
  currentWord: string;
  guessedLetters: string[];
  gameLost: boolean;
}) {
  const letters = props.currentWord.split("");
  const letterElements = letters.map((letter, index) => {
    const shouldRevealLetter =
      props.gameLost || props.guessedLetters.includes(letter);
    const letterClassName = clsx(
      "letter-input",
      props.gameLost &&
        !props.guessedLetters.includes(letter) &&
        "missed-letter"
    );

    return (
      <span key={index} className={letterClassName}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

  return <section className="letter-section">{letterElements}</section>;
}
