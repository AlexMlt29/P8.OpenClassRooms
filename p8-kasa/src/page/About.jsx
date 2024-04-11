import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from '../components/Banner';
import Colapse from "../components/Colapse";

function About() {
  return (
    <div>
      <Header />
      <section className="about">
        <Banner />
        <div className="with-display">
          <Colapse title="Fiabilité">
            <p className="text-display">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
          </Colapse>
          <Colapse title="Respect">
            <p className="text-display">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </Colapse>
          <Colapse title="Service">
            <p className="text-display">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </Colapse>
          <Colapse title="Sécurité">
            <p className="text-display">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critère de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locatoire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.</p>
          </Colapse>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
