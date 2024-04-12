import React, { useState } from "react";
import arrowleft from "../logo/arrow-left.png";
import arrowright from "../logo/arrow-right.png";

function Carousel({ pictures }) {
  let [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  let slides = pictures.map(picture => ({ image: picture }));

  let arrowClick = (direction) => {
    setCurrentSlideIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex >= slides.length) newIndex = 0;
      if (newIndex < 0) newIndex = slides.length - 1;
      return newIndex;
    });
  };

  let generateDots = () => {
    return slides.map((_, index) => (
      <div key={index} className={`dot ${index === currentSlideIndex ? "dot_selected" : ""}`} onClick={() => setCurrentSlideIndex(index)}></div>
    ));
  };

  return (
    <div id="carousel">
      <img className="carousel-image" src={slides[currentSlideIndex].image} alt="Slide" />
      <img src={arrowleft} className="arrow arrow-left" onClick={() => arrowClick(-1)} alt="Previous" />
      <img src={arrowright} className="arrow arrow-right" onClick={() => arrowClick(1)} alt="Next" />
      <div className="dots">{generateDots()}</div>
    </div>
  );
}

export default Carousel;
