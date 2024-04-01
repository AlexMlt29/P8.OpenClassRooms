import React from "react";
import logo from "../logo/LOGO.png";

function Header() {
  return (
    <header>
      <div className="test">
        <img src={logo} alt="Kosa" className="logo" />
        <nav className="navigation">
          <a href="/" className="nav-link">
            ACCUEIL
          </a>
          <a href="/about" className="nav-link">
            À PROPOS
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
