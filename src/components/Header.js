import React from "react";
import logo from "../images/logo.svg";

export default Header;

function Header() {
  return (
    <header className="header section-pos">
      <img src={logo} alt="логотип проекта Место" className="header__logo" />
    </header>
  );
}
