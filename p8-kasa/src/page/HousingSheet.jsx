import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import arrow_left from "../logo/arrow_left.png";
import arrow_right from "../logo/arrow_right.png";
import staron from "../logo/star-on.png";
import staroff from "../logo/star-off.png";
import circle from "../logo/circle.png";
import vector from "../logo/Vector.png";
import SmallHouse from "../logo/SmallHouse.png";
import House1 from "../logo/house1.png";

const slides = [
  {
    image: SmallHouse,
  },
  {
    image: House1,
  },
];

function HousingSheet() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleArrowClick = (direction) => {
    setCurrentSlideIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex >= slides.length) newIndex = 0;
      if (newIndex < 0) newIndex = slides.length - 1;
      return newIndex;
    });
  };

  const generateDots = () => {
    return slides.map((_, index) => (
      <div
        key={index}
        className={`dot ${index === currentSlideIndex ? "dot_selected" : ""}`}
        onClick={() => setCurrentSlideIndex(index)}
      ></div>
    ));
  };

  return (
    <div>
      <Header />
      <section className="house">
        <div id="banner">
          <img className="banner-img" src={slides[currentSlideIndex].image} alt="Intérieur d'un salon lumineux, comportant une table à manger, une commode en bois. Une œuvre d'art colorée est accrochée au-dessus de la commode." />
          <img src={arrow_left} className="arrow arrow_left" onClick={() => handleArrowClick(-1)} alt="arrow_left" />
          <img src={arrow_right} className="arrow arrow_right" onClick={() => handleArrowClick(1)} alt="arrow_right" />
          <div className="dots">{generateDots()}</div>
        </div>
        <h2 className="house-title">Paris Center, on the romantic Canal Saint-Martin</h2>
        <p className="house-text">Paris, Île-de-France</p>
        <div className="tag-container">
          <div className="house-tag">
            <h3 className="tag-text">Cozy</h3>
          </div>
          <div className="house-tag">
            <h3 className="tag-text">Canal</h3>
          </div>
          <div className="house-tag">
            <h3 className="tag-text">Paris 10</h3>
          </div>
        </div>
        <div className="rating">
          <div className="stars">
            <img src={staron} />
            <img src={staron} />
            <img src={staron} />
            <img src={staroff} />
            <img src={staroff} />
          </div>
          <div className="rating-content">
            <p className="rating-text">Alexandre Dumas</p>
            <img src={circle} className="rating-circle" />
          </div>
        </div>
        <div className="description">
          <div className="rollmenu">
            <p className="rollmenu-text">Description</p>
            <img src={vector} className="rollmenu-image" />
          </div>
          <div className="rollmenu">
            <p className="rollmenu-text">Équipements</p>
            <img src={vector} className="rollmenu-image" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HousingSheet;
