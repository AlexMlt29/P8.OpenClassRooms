import React from "react";
import logo from "../logo/LOGO.png";

function Header() {
  return (
    <header>
      <div className="topbar">
        <img src={logo} alt="Logo Kosa" className="logo" />
        <nav className="navigation">
          <a href="/" className="nav-home">
            ACCUEIL
          </a>
          <a href="/about" className="nav-about">
            À PROPOS
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
