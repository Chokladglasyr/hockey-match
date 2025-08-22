import { useContext } from "react";
import { LanguageContext } from "../store/languageContext";

function Footer() {
  const language = useContext(LanguageContext);
  if (!language) throw new Error("Must be used within LanguageProvider");
  const { eng } = language;

  const text = {
    en: {
      title: "Sponsors",
    },
    sv: {
      title: "Sponsorer",
    },
  };

  const lang = eng ? text.en : text.sv;
  return (
    <>
      <footer>
        <article>
          <div>
            <p>Köpings Ishall</p>
            <p>Hultgrensgatan 10</p>
          </div>
          <div className="email">
            <p>email@example.com</p>
          </div>
        </article>
        <article className="spons">
          <h2 id="sponsors">{lang.title}</h2>
          <div className="sponsors">
            <div>
              <img src="concussionhelp.svg" alt="" />
              <img src="boston.svg" alt="" />
            </div>
            <img id="koping" src="koping.svg" alt="" />
          </div>
        </article>
      </footer>
    </>
  );
}
export default Footer;
