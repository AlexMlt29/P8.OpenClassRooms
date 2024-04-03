import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from "../logo/source1.png";

function HomePage() {
  return (
  <div>
    <Header />
    <body>
      <section className="menu">
        <div className="banner">
            <img src={logo} alt="Côte rocheuse embrumée avec des vagues s'écrasant sur le rivage, entourée d'arbres résistants au vent" className="banner-image" />
            <div className="dark-background"></div>
            <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
        </div>
        <div className="cards">
            <a href="/HousingSheet" className="cards-container">
                <h2 className="cards-text">Titre de la location</h2>
            </a>
            <a href="/HousingSheet" className="cards-container">
                <h2 className="cards-text">Titre de la location</h2>
            </a>
            <a href="/HousingSheet" className="cards-container">
                <h2 className="cards-text">Titre de la location</h2>
            </a>
        </div>
      </section>
    </body>
    <Footer />
  </div>
  );
}

export default HomePage;