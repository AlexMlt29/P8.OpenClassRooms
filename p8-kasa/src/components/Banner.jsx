import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo/banner-1.png';
import mountain from '../logo/banner-2.png';

function Banner() {
  const location = useLocation();

  let imageSrc, imageAlt, bannerText, className;
  if (location.pathname === '/') {
    imageSrc = logo;
    imageAlt = "Côte rocheuse embrumée avec des vagues s'écrasant sur le rivage, entourée d'arbres résistants au vent";
    bannerText = "Chez vous, partout et ailleurs";
    className = "dark-background";
  } else if (location.pathname === '/about') {
    imageSrc = mountain;
    imageAlt = "Côte rocheuse embrumée avec des vagues s'écrasant sur le rivage, entourée d'arbres résistants au vent";
    bannerText = "";
    className = "light-background";
  }

  return (
    <div className="banner">
      <Link to="">
        <img src={imageSrc} alt={imageAlt} className="banner-image" />
        <div className={className}></div>
        {bannerText && <h1 className="banner-text">{bannerText}</h1>}
      </Link>
    </div>
  );
}

export default Banner;
