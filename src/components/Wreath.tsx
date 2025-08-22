import { useContext } from "react";
import { LanguageContext } from "../store/languageContext";

function Wreath() {
  const language = useContext(LanguageContext);
  if (!language) throw new Error("Must be used within LanguageProvider");
  const { eng } = language;

  const text = {
    en: {
      title: "You're invited!",
      date: "September 27th",
      location: "@ Köpings Ice Hall",
    },
    sv: {
      title: "Du är inbjuden!",
      date: "27:e september",
      location: "@ Köpings Ishall",
    },
  };
  const lang = eng ? text.en : text.sv;
  return (
    <>
      <section id="wreath">
        <h1>{lang.title}</h1>
        <img className="picture" src="nils.png" alt="" />
        <h2>{lang.date}</h2>
        <h3>{lang.location}</h3>
      </section>
    </>
  );
}
export default Wreath;
