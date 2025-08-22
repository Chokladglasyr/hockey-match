import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { LanguageContext } from "../store/languageContext";

function Home() {
  const language = useContext(LanguageContext);
  if (!language) throw new Error("Must be used within LanguageProvider");
  const { eng } = language;
  const text = {
    en: {
      activity_one: "Take a shot at the goal!",
      activity_two: "Win prizes!",
      activity_three: "Free autographs",
      activity_four: "Meet the players!",
      button: "Read about Nils",
            descript1: 
      "On September 27 — Nils-Erik Söderlund’s birthday — we gather to honor his memory through the sport he loved: hockey.",
      descript2:
      "This is a day of joy, remembrance, and awareness — with a fundraiser to support brain injury research, an issue close to Nils-Erik’s story.",
      descript3: 
      "Thank you for being here and helping make this day truly special."
    },
    sv: {
      activity_one: "Testa skjut mot mål!",
      activity_two: "Vinn priser!",
      activity_three: "Gratis autografer",
      activity_four: "Träffa spelarna!",
      button: "Läs om honom här",
      descript1:
        "Den 27 september – på Nils-Erik Söderlunds födelsedag – samlas vi för att hedra hans minne genom det han älskade mest: hockey. ",
      descript2: 
      "Med värme, glädje och gemenskap minns vi Nisse – samtidigt som vi lyfter frågan om hjärnskador inom sporten.",
      descript3: "Tack för att du är här och gör den här dagen möjlig."
    },
  };
  const lang = eng ? text.en : text.sv;

  return (
    <>
      <Logo />
      <article className="activities">
        <div>
          <img className="emoji" src="goal.png" alt="goal" />
          <p>{lang.activity_one}</p>
        </div>
        <div className="left">
          <img className="emoji" src="trophy.png" alt="trophy" />
          <p>{lang.activity_two}</p>
        </div>
        <div>
          <img className="emoji" src="pen.png" alt="pencil" />
          <p>{lang.activity_three}</p>
        </div>
        <div className="left">
          <img className="emoji" src="handshake.png" alt="handshake" />
          <p>{lang.activity_four}</p>
        </div>
      </article>
      <article>
        <p className="descript">{lang.descript1}</p>
        <p className="descript">{lang.descript2}</p>
        <p className="descript">{lang.descript3}</p>
      </article>
      <img className="picture" id="dove" src="dove.png" alt="dove" />
      <h2>Nils Erik Söderlund</h2>
      <Link className="BTN" id="nils" to={"/nils"}>
        {lang.button}
      </Link>{" "}
    </>
  );
}
export default Home;
