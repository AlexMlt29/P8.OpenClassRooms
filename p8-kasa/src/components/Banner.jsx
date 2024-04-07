import React from "react";
import logo from "../logo/banner-1.png";

function Banner() {
  return (
    <div className="banner">
      <img src={logo} alt="Côte rocheuse embrumée avec des vagues s'écrasant sur le rivage, entourée d'arbres résistants au vent" className="banner-image" />
      <div className="dark-background"></div>
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
