import { Link, useLocation } from "react-router-dom";
import BackHomeBtn from "./BackHomeBTN";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext";

function Nav() {
  const language = useContext(LanguageContext);
  if (!language) throw new Error("Must be used within LanguageProvider");
  const { eng } = language;

  const location = useLocation();
  const pathname = location.pathname;

  const text = {
    en: {
      button_one: "About the day",
      button_two: "Sign up",
    },
    sv: {
      button_one: "Om dagen",
      button_two: "Anmäl intresse",
    },
  };
  const lang = eng ? text.en : text.sv;

  return (
    <>
      <nav>
        {pathname != "/theday" ? (
          <Link to={"/theday"} className="BTN" id="schedule">
            {lang.button_one}
          </Link>
        ) : (
          <BackHomeBtn />
        )}

        {pathname != "/signup" ? (
          <Link to={"/signup"} className="BTN" id="intresse">
            {lang.button_two}
          </Link>
        ) : (
          <BackHomeBtn />
        )}
      </nav>
    </>
  );
}
export default Nav;
