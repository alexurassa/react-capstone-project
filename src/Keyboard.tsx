export default function Keyboard(props: {
  guessedLetterChange: (letter: string) => void;
}) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  return (
    <section className="keyboard">
      {alphabets.split("").map((alphabet, indx) => {
        return (
          <button
            type="button"
            className="keyboard-btn"
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
