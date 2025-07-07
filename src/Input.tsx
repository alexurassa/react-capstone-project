export default function Input(props: { currentWord: string }) {
  const letters = props.currentWord.split("");
  return (
    <section className="letter-section">
      {letters.map((letter, index) => (
        <span key={index} className="letter-input">
          {letter.toUpperCase()}
        </span>
      ))}
    </section>
  );
}
