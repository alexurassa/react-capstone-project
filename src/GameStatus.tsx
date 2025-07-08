import clsx from "clsx";

export default function GameStatus({
  isGameWon,
  isGameLost,
}: {
  isGameWon: boolean;
  isGameLost: boolean;
}) {
  const noticeContent = () => {
    if (isGameWon || isGameLost) {
      return (
        <>
          <h3> {isGameWon ? "You won!" : "Game Over!!"} </h3>
          <p>
            {isGameWon
              ? "Well done"
              : "You loose! Better start learning Assembly."}{" "}
          </p>
        </>
      );
    }
  };
  return (
    <section
      className={clsx("game-status", { won: isGameWon, lost: isGameLost })}
    >
      {noticeContent()}
    </section>
  );
}
