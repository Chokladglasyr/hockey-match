import { Link } from "react-router-dom";

function BackHomeBtn({eng}:{eng:boolean}){
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