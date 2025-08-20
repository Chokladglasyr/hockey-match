import { Link } from "react-router-dom";

function Nav({eng}:{eng: boolean}) {
  const text = {
    en:{
      button_one: "About the day",
      button_two: "Sign up"
    },
    sv:{
      button_one: "Om dagen",
      button_two: "Sign up"
    }
  }
  const lang = eng ? text.en : text.sv

  return (
    <>
      <nav>
        <Link to={"/theday"} className="BTN" id="schedule">
          {lang.button_one}
        </Link>
        <Link to={"/signup"}className="BTN" id="intresse">
          {lang.button_two}
        </Link>
      </nav>
    </>
  );
}
export default Nav;