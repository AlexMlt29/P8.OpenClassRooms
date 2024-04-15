import React, { useState } from "react";
import arrowleft from "../logo/arrow-left.png";
import arrowright from "../logo/arrow-right.png";

function Carousel({ pictures }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = pictures.map(picture => ({ image: picture }));

  const arrowClick = (direction) => {
    setCurrentSlideIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex >= slides.length) newIndex = 0;
      if (newIndex < 0) newIndex = slides.length - 1;
      return newIndex;
    });
  };

  const generateDots = () => {
    const dots = [];
    for (let index = 0; index < slides.length; index++) {
      let className = 'dot';
      if (index === currentSlideIndex) {
        className += ' dot_selected';
      }
      dots.push(<div key={index} className={className} onClick={() => setCurrentSlideIndex(index)}></div>);
    }
    return dots;
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
