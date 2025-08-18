import { Link } from "react-router-dom";
import Wreath from "./Wreath";

function Nils() {
  return (
    <>
      <Wreath />
      <article id="aboutNils">
        <p>
          I början av juni 2024 gick Nils-Erik Söderlund bort, endast 34 år
          gammal, i en bilolycka i USA.
        </p>
        <p>
          Nils-Erik hade rötterna i Köping via sin pappa och i USA via sin
          mamma. Uppväxten spenderas både i Köping och på andra sidan Atlanten i
          olika perioder.
        </p>
        <p>
          Sport var en stor del av hans liv och framförallt var det ishockey
          hans hjärta klappade extra för. Inför säsongen 2016/2017 återvände
          ”Nisse” till moderklubben Köping Hockey. Den storväxte forwarden
          gjorde inga större avtryck i poängligan, men hans tuffa spelstil
          gjorde honom till en favorit bland publiken.
        </p>
        <p>
          För att minnas och hylla hans liv pågår just nu förberedelser inför en
          hyllningsmatch som ska spelas i Köpings ishall lördagen den 27
          september. Då kommer flera av hans gamla lagkamrater i Köping Hockey
          att möta ett hopplock av hans tidigare lagkamrater från olika delar av
          USA.
        </p>
      </article>
        <Link className="BTN" id="nils" to={"/home"}>Tillbaka hem</Link>
    </>
  );
}
export default Nils;
