import { Outlet } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav eng={true} />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

export default App;
