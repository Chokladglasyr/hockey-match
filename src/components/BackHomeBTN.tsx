import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../store/languageContext";

function BackHomeBtn(){
      const language = useContext(LanguageContext)
  if(!language) throw new Error ("Must be used within LanguageProvider");
  const {eng} = language
    const text = {
        en:{
            button: "Back home"
        },
        sv: {
            button: "Tillbaka hem"
        }
    }
    const lang = eng ? text.en : text.sv;
    return (
        <>
        <Link className="BTN" id="nils" to={"/"}>
        {lang.button}
      </Link>
        </>
    )
}
export default BackHomeBtn