import { Link } from "react-router-dom";
import Logo from "./Logo";



function Home({eng}: {eng: boolean}) {
const text = {
    en: {
        activity_one: "Take a shot at the goal!",
        activity_two: "Win prizes!",
        activity_three: "Free autographs",
        activity_four: "Meet the players!",
        button: "Read about Nils"
    },
    sv: {
        activity_one: "Testa skjut mot mål!",
        activity_two: "Vinn priser!",
        activity_three: "Gratis autografer",
        activity_four: "Träffa spelarna!",
        button: "Läs om honom här"
    }
}
const lang = eng ? text.en : text.sv

  return (
    <>
      <Logo eng={true}/>
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
      <img className="picture" id="dove" src="dove.png" alt="dove" />
      <h2>Nils Erik Söderlund</h2>
      <Link className="BTN" id="nils" to={"/nils"}>
        {lang.button}
      </Link>{" "}
    </>
  );
}
export default Home;
