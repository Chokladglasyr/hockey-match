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
      <main>
        <button onClick={toggleLanguage}>{eng ? "Swedish": "English"}</button>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default App;
