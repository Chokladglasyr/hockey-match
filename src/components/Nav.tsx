import { Link, useLocation } from "react-router-dom";
import BackHomeBtn from "./BackHomeBTN";

function Nav({eng}:{eng: boolean}) {
  const location = useLocation();
  const pathname = location.pathname;
  

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
        {pathname != "/signup" ?
        <Link to={"/signup"}className="BTN" id="intresse">
          {lang.button_two}
        </Link> : <BackHomeBtn  eng={true}/>
        }

      </nav>
    </>
  );
}
export default Nav;