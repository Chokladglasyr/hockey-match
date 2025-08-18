import { Link } from "react-router-dom";
import Wreath from "./Wreath";

function Nils({ eng }: { eng: boolean }) {
  const text = {
    en: {
      p_one:
        "In early June 2024, Nils-Erik Söderlund passed away at the young age of 34 in a car accident in the United States.",
      p_two:
        "Nils-Erik had roots in Köping through his father and in the USA through his mother. He spent his childhood both in Köping and across the Atlantic at different times.,",
      p_three:
        "Sports were a major part of his life, and above all, ice hockey held a special place in his heart. Ahead of the 2016/2017 season, “Nisse” returned to his childhood club, Köping Hockey. The large forward didn’t make much of a mark in the scoring charts, but his tough playing style made him a fan favorite.",
      p_four:
        "To remember and honor his life, preparations are currently underway for a tribute match to be played at Köpings Ice Arena on Saturday, September 27. On that day, several of his former teammates from Köping Hockey will face off against a mix of his past teammates from various parts of the USA.",
        button: "Back home"
    },
    sv: {
      p_one:
        "I början av juni 2024 gick Nils-Erik Söderlund bort, endast 34 år gammal, i en bilolycka i USA.",
      p_two:
        "Nils-Erik hade rötterna i Köping via sin pappa och i USA via sin mamma. Uppväxten spenderas både i Köping och på andra sidan Atlanten i olika perioder.",
      p_three:
        "Sport var en stor del av hans liv och framförallt var det ishockey hans hjärta klappade extra för. Inför säsongen 2016/2017 återvände ”Nisse” till moderklubben Köping Hockey. Den storväxte forwarden gjorde inga större avtryck i poängligan, men hans tuffa spelstil gjorde honom till en favorit bland publiken.",
      p_four:
        "För att minnas och hylla hans liv pågår just nu förberedelser inför en hyllningsmatch som ska spelas i Köpings ishall lördagen den 27 september. Då kommer flera av hans gamla lagkamrater i Köping Hockey att möta ett hopplock av hans tidigare lagkamrater från olika delar av USA.",
        button: "Tillbaka hem"
    },
  };

  const lang = eng ? text.en : text.sv;

  return (
    <>
      <Wreath eng={true} />
      <article id="aboutNils">
        <p>{lang.p_one}</p>
        <p>{lang.p_two}</p>
        <p>{lang.p_three}</p>
        <p>{lang.p_four}</p>
      </article>
      <Link className="BTN" id="nils" to={"/"}>
        {lang.button}
      </Link>
    </>
  );
}
export default Nils;
