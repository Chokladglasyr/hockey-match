import { useContext } from "react";
import Logo from "./Logo"
import { LanguageContext } from "../store/languageContext";

function Schedule() {
      const language = useContext(LanguageContext)
  if(!language) throw new Error ("Must be used within LanguageProvider");
  const {eng} = language

    const text = {
        en: {
            title: "Schedule",
            timeOne: "1:00 PM – 3:00 PM ",
            first: "Match time!",
            second: "",
            third: "",
        },
        sv: {
            title: "Schema",
            timeOne: "13.00 - 15.00 ",
            first: "Matchdags!",
            second: "",
            third: "",
        }
    }
    const lang = eng ? text.en : text.sv;

    return (
        <>
        <Logo />
        <article id="theday">
            <h1>{lang.title}</h1>
            {/* <div>
                <p>{lang.timeOne}</p>
            <p>{lang.first}</p>
            </div>
            <p>{lang.second}</p>
            <p>{lang.third}</p> */}
        </article>
        <table>
            <tr>
                <td className="time">{lang.timeOne}</td>
                <td>{lang.first}</td>
            </tr>
        </table>
        </>
    )
}
export default Schedule