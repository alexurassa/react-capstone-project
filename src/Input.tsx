export default function Input(props: {
  currentWord: string;
  guessedLetters: string[];
}) {
  const letters = props.currentWord.split("");
  return (
    <section className="letter-section">
      {letters.map((letter, index) => (
        <span key={index} className="letter-input">
          {props.guessedLetters.includes(letter) ? letter.toUpperCase() : ""}
        </span>
      ))}
    </section>
  );
}
