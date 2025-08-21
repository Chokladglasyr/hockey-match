function Form({ eng }: { eng: boolean }) {
  const text = {
    en: {
      name: "Name",
      hotel: "I want to stay overnight.",
      banquet: "I will attend the banquet.",
      allergy: "Do you have any allergies/intolerances?",
      other: "Other",
      btn: "Skicka in",
      thanks: "Tack för att du anmäler dig, då kan vi lättare räkna på hur mycket mat som behövs och hjälpa hotellet få plats med alla!"
    },
    sv: {
      name: "Namn",
      hotel: "Jag vill stanna över natten.",
      banquet: "Jag kommer delta på banketten.",
      allergy: "Har du några allergier/intoleranser?",
      other: "Övrigt",
      btn: "Send",
      thanks: "Thank you for registering, it makes it easier for us to calculate how much food is needed and help the hotel accommodate everyone!"
    },
  };
  const lang = eng ? text.en : text.sv;
  return (
    <>
      <section className="signup">
        <h1>Tack</h1>
        <p>{lang.thanks}</p>
        <form action="">
          <input type="text" name="name" id="name" placeholder="Name" required/>
          <input type="text" name="email" id="email" placeholder="Email" required/>
          <div>
            <input type="checkbox" name="hotel" id="hotel" />
            <label htmlFor="hotel">{lang.hotel}</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="banquet"
              id="banquet"
              value={"banquet"}
            />
            <label htmlFor="banquet">{lang.banquet}</label>
          </div>
          <div className="text">
            <label htmlFor="allergy">{lang.allergy}</label>
            <textarea name="allergy" id="allergy"></textarea>
          </div>
          <div className="text">
            <label htmlFor="other">{lang.other}</label>
            <textarea name="other" id="other" ></textarea>
          </div>
          <button className="BTN" id="signup">{lang.btn}</button>
        </form>
      </section>
    </>
  );
}
export default Form;
