import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import data from "../data/file.json";
import { Link } from "react-router-dom";

function HomePage() {

  return (
    <div>
      <Header />
      <section className="menu">
        <Banner />
        <div className="background-cards">
          <div className="cards">
            {data.map((item) => (
              <Link to={`/${item.id}`} className="cards-container" key={item.id}>
                <div className="imagetext-container">
                  <img className="cards-images" src={item.pictures[0]} alt={item.title} />
                  <h2 className="cards-text">{item.title}</h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
