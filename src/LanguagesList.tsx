import { clsx } from "clsx";
import { languages } from "./languages";

export default function LanguagesList(props: { wrongGuessCount: number }) {
  return (
    <>
      <section className="lang-list">
        {languages.map((lang, indx: number) => (
          <div
            key={indx}
            className={clsx("lang-chip", {
              lost: indx < props.wrongGuessCount,
            })}
            style={{
              backgroundColor: lang.backgroundColor,
              color: lang.color,
            }}
          >
            {lang.name}
          </div>
        ))}
      </section>
    </>
  );
}
