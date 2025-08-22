import { Outlet } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useContext } from "react";
import { LanguageContext } from "./store/languageContext";

function App() {
  const language = useContext(LanguageContext);
  if (!language) throw new Error("Must be used within LanguageProvider");
  const { eng, toggleLanguage } = language;

  return (
    <>
      <Nav />
        <button id="language" onClick={toggleLanguage}>{eng ? <img src="sv.svg" alt="" /> : <img src="en.svg" alt="" />}</button>
      <main>
        <Outlet/>
        
      </main>
      <Footer />
    </>
  );
}

export default App;
