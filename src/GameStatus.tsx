import clsx from "clsx";
import { getFarewellText } from "./utils";
import { languages } from "./languages";

export default function GameStatus({
  isGameWon,
  isGameLost,
  isGameOver,
  lastGuessIncorrect,
  wrongGuessCount,
}: {
  isGameWon: boolean;
  isGameLost: boolean;
  isGameOver: boolean;
  lastGuessIncorrect: boolean;
  wrongGuessCount: number;
}) {
  const noticeContent = () => {
    if (isGameOver && (isGameWon || isGameLost)) {
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
    } else if (!isGameOver && lastGuessIncorrect) {
      return (
        <>
          <p className="farewell-text">
            {getFarewellText(languages[wrongGuessCount - 1].name)}
          </p>
        </>
      );
    }
  };
  return (
    <section
      className={clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: lastGuessIncorrect,
      })}
      aria-live="polite"
      role="status"
    >
      {noticeContent()}
    </section>
  );
}
