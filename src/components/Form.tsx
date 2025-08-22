import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageContext } from "../store/languageContext";

function Form() {
  const language = useContext(LanguageContext);
  if (!language) throw new Error("Must be used within LanguageProvider");
  const { eng } = language;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const API_URL = import.meta.env.VITE_API_BASE_URL_LOCAL;

  const addAttendee = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/admin`, {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ ...formData }),
      });
      const data = await res.json();
      console.log(data);
      alert("Thank you for signing up!");
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("Failed to sign up: ", err);
      }
    }
  };

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setFormData({ ...formData, [name]: e.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const text = {
    en: {
      name: "Name",
      hotel: "I want to stay overnight.",
      banquet: "I will attend the banquet.",
      allergy: "Do you have any allergies/intolerances?",
      other: "Other",
      btn: "Send",
      thanks:
      "Thank you for registering, it makes it easier for us to calculate how much food is needed and help the hotel accommodate everyone!",
    },
    sv: {
      name: "Namn",
      hotel: "Jag vill stanna över natten.",
      banquet: "Jag kommer delta på banketten.",
      allergy: "Har du några allergier/intoleranser?",
      other: "Övrigt",
      btn: "Skicka in",
      thanks:
        "Tack för att du anmäler dig, då kan vi lättare räkna på hur mycket mat som behövs och hjälpa hotellet få plats med alla!",
    },
  };
  const lang = eng ? text.en : text.sv;
  return (
    <>
      <section className="signup">
        <h1>Tack</h1>
        <p>{lang.thanks}</p>
        <form onSubmit={addAttendee}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            onChange={handleInput}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            onChange={handleInput}
          />
          <div>
            <input
              type="checkbox"
              name="staying"
              id="staying"
              onChange={handleInput}
            />
            <label htmlFor="hotel">{lang.hotel}</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="banquet"
              id="banquet"
              onChange={handleInput}
            />
            <label htmlFor="banquet">{lang.banquet}</label>
          </div>
          <div className="text">
            <label htmlFor="allergy">{lang.allergy}</label>
            <textarea
              name="allergy"
              id="allergy"
              onChange={handleInput}
            ></textarea>
          </div>
          <div className="text">
            <label htmlFor="other">{lang.other}</label>
            <textarea name="other" id="other" onChange={handleInput}></textarea>
          </div>
          <button className="BTN" id="signup">
            {lang.btn}
          </button>
        </form>
      </section>
    </>
  );
}
export default Form;
