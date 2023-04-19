import React from 'react';
import logo from "../static/images/logo.svg";

function Header() {
  return (
    <header className="header">
    <img src={logo} className="header__logo" alt="Логотип Места России" />
    </header>
  );
}
  
export default Header;



