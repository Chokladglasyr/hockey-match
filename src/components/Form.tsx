function Form({eng}: {eng: boolean}) {
    const text = {
        en: {
            name: "Name",
            hotel: "Staying over",
            banquet: "Banquet",
            allergy: "Do you have any allergies/intolerances?",
            msg1: "I have ",
            other: "Other",
            msg2: "I would like to add ",
            btn: "Skicka in"
        },
        sv: {
            name: "Namn",
            hotel: "Vill sova över",
            banquet: "Bankett",
            allergy: "Har du några allergier/intoleranser?",
            msg1: "Jag har...",
            other: "Övrigt",
            msg2: "Jag vill tillägga ",
            btn: "Send"
        }
    }
    const lang = eng ? text.en : text.sv;
    return(
        <>
        <section>
            <h1>Tack</h1>
            <form action="">
                <input type="text" name="name" id="name" placeholder="Name" />
                <input type="text" name="email" id="email" placeholder="Email"/>
                <div>
                <input type="checkbox" name="hotel" id="hotel"/>
                <label htmlFor="hotel">{lang.hotel}</label>
                </div>
                <div>
                <input type="checkbox" name="banquet" id="banquet" value={"banquet"} />
                <label htmlFor="banquet">{lang.banquet}</label>
                </div>
                <label htmlFor="allergy">{lang.allergy}</label>
                <textarea name="allergy" id="allergy">{lang.msg1}</textarea>
                <label htmlFor="other">{lang.other}</label>
                <textarea name="other" id="other">{lang.msg2}</textarea>
            </form>
            <button>{lang.btn}</button>
        </section>
        </>
    )
}
export default Form