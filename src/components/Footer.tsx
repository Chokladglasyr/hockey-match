function Footer() {
    return (
    <>
    <footer>
        <article>
        <p>
            Köpingsishall
        </p>
        <p>
            Hultgrensgatan 10
        </p>
        <p>
            email@example.com
        </p>
        </article>
        <article className="spons">
            <h2 id="sponsors">Sponsorer</h2>
            <div className="sponsors">
                <div>
            <img src="concussionhelp.svg" alt="" />
            <img src="boston.svg" alt="" />

                </div>
            <img id="koping" src="koping.svg" alt="" />
            </div>
        </article>
    </footer>
    </>
    );
}
export default Footer;