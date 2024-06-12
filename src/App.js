import React, { useState } from "react";
import "./style/style.css";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  return (
    <div className="container">
      <div className="wrap">
        <Header />
        <Aside setActiveMenu={setActiveMenu} />
        <Main selectedMenu={activeMenu} />
      </div>
    </div>
  );
};

export default App;
