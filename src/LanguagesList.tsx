import { languages } from "./languages";

export default function LanguagesList() {
  return (
    <>
      <section className="lang-list">
        {languages.map((lang, indx: number) => (
          <div
            key={indx}
            className="lang-chip"
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
