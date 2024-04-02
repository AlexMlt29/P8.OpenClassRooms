import React from "react";
import logo from "../logo/LOGO-white.png";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="Logo Kosa" className="logo-footer" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;