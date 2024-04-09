import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from '../components/Banner';
import vector from "../logo/vector.png";

function About() {
  return (
    <div>
      <Header />
      <section className="about">
        <Banner />
        <div className="rollmenu">
          <div className="rollmenu-header">
            <p className="rollmenu-text">Fiabilité</p>
            <img src={vector} className="rollmenu-image" alt="i"/>
          </div>
          <div className="rollmenu-header">
            <p className="rollmenu-text">Respect</p>
            <img src={vector} className="rollmenu-image" alt="i"/>
          </div>
          <div className="rollmenu-header">
            <p className="rollmenu-text">Service</p>
            <img src={vector} className="rollmenu-image" alt="i"/>
          </div>
          <div className="rollmenu-header">
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
