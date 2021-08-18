import React, { useState } from "react";
import Contact from "./Page/Contact/Contact";
import Intro from "./Page/Intro/Intro";
import Portfilio from "./Page/Portfilio/Portfilio";
import Testimonia from "./Page/Testimonias/Testimonia";
import Topbar from "./Page/TobBar/Topbar";
import Works from "./Page/Works/Works";
import "./App.scss";
import Menu from "./Page/menu/menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfilio />
        <Works />
        <Testimonia />
        <Contact />
      </div>
    </div>
  );
};

export default App;
