import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mountain from "../logo/banner-2.png";
import vector from "../logo/vector.png";

function About() {
  return (
    <div>
      <Header />
      <section className="about">
        <div className="banner">
          <img src={mountain} alt="Vue sur une vallée fluviale bordée de forêts avec des montagnes en arrière-plan sous un ciel bleu." className="banner-image" />
          <div className="dark-background"></div>
        </div>
        <div className="description">
          <div className="rollmenu">
            <p className="rollmenu-text">Fiabilité</p>
            <img src={vector} className="rollmenu-image" alt="i"/>
          </div>
          <div className="rollmenu">
            <p className="rollmenu-text">Respect</p>
            <img src={vector} className="rollmenu-image" alt="i"/>
          </div>
          <div className="rollmenu">
            <p className="rollmenu-text">Service</p>
            <img src={vector} className="rollmenu-image" alt="i"/>
          </div>
          <div className="rollmenu">
            <p className="rollmenu-text">Sécurité</p>
            <img src={vector} className="rollmenu-image" alt="i"/>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
