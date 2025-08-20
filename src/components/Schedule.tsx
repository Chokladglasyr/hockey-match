import BackHomeBtn from "./BackHomeBTN";
import Logo from "./Logo"

function Schedule({eng}:{eng:boolean}) {

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
        <Logo eng={true} />
        <article>
            <h1>{lang.title}</h1>
            <p>{lang.first}</p>
            <p>{lang.second}</p>
            <p>{lang.third}</p>
        </article>
              <BackHomeBtn eng ={true} />
        </>
    )
}
export default Schedule