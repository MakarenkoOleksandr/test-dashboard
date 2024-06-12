import { useState } from "react";
import menu from "../../props/menu";
import logo from "./../../img/logo.svg";

const AsideMenu = ({ setActiveMenu }) => {
  const [active, setActive] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const setActiveEl = (index) => {
    setActive(index);
    setActiveMenu(index);
  };
  return (
    <nav className="aside__navigation-menu menu">
      <div className="menu__logo">
        <img className="menu__logo-img" alt="logo" src={logo}></img>
        <strong className="menu__logo-title">Dashboard</strong>
      </div>

      <ul className="menu__wrap">
        {menu.name.map((el, index) => {
          const isActive = index === active;
          const isHovered = index === hoveredIndex;
          const imageNormal = require(`./../../img/menu/${el.toLowerCase()}_normal.svg`);
          const imageActive = require(`./../../img/menu/${el.toLowerCase()}_active.svg`);

          return (
            <li
              className={`menu__item ${isActive ? "active" : ""}`}
              key={index}
              onClick={() => setActiveEl(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="menu__item-link" key={index}>
                <div
                  className="menu__item-img"
                  style={{
                    backgroundImage: `url(${
                      isActive || isHovered ? imageActive : imageNormal
                    })`,
                  }}
                ></div>
                <div
                  className={`menu__item-content ${isActive ? "active" : ""}`}
                >
                  {el}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AsideMenu;
