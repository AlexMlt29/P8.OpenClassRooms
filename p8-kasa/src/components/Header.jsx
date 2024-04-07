import React from "react";
import logo from "../logo/kasa.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="topbar">
        <img src={logo} alt="Logo Kosa" className="logo" />
        <nav className="navigation">
          <NavLink to="/" className="nav-home" >ACCUEIL</NavLink>
          <NavLink to="/about" className="nav-home" >À PROPOS</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
