import { useContext } from "react";
import BackHomeBtn from "./BackHomeBTN";
import Logo from "./Logo"
import { LanguageContext } from "../store/languageContext";

function Schedule() {
      const language = useContext(LanguageContext)
  if(!language) throw new Error ("Must be used within LanguageProvider");
  const {eng} = language

    const text = {
        en: {
            title: "Schedule",
            first: "1:00 PM – 3:00 PM – Tribute match between former teammates from Köping and former teammates from the USA",
            second: "",
            third: "",
        },
        sv: {
            title: "Schema",
            first: "13.00 - 15.00 - Hyllningsmatch mellan forna lagkramater från Köping mot forna lagkamrater i USA",
            second: "",
            third: "",
        }
    }
    const lang = eng ? text.en : text.sv;

    return (
        <>
        <Logo />
        <article>
            <h1>{lang.title}</h1>
            <p>{lang.first}</p>
            <p>{lang.second}</p>
            <p>{lang.third}</p>
        </article>
              <BackHomeBtn />
        </>
    )
}
export default Schedule