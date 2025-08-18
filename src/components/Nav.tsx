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
        <button className="BTN" id="schedule">
          {lang.button_one}
        </button>
        <button className="BTN" id="intresse">
          {lang.button_two}
        </button>
      </nav>
    </>
  );
}
export default Nav;