import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import data from '../data/file.json';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Header />
      <section className="menu">
        <Banner />
        <div className="cards">
          {data.map((item) => (
            <Link to={`/HousingSheet/${item.id}`} className="cards-container" key={item.id}>
              <h2 className="cards-text">{item.title}</h2>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
