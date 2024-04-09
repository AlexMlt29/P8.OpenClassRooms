import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import Colapse from "../components/Colapse";
import staron from "../logo/star-on.png";
import staroff from "../logo/star-off.png";
import data from "../data/file.json";
import { useParams, Navigate } from 'react-router-dom';


function HousingSheet() {

  let { id } = useParams();
  let accommodation = data.find(item => item.id === id);

  if (!accommodation) {
    return <Navigate to="/Error" replace />;
  }

  function renderStars(rating) {
    const stars = [];
  
    for (let i = 0; i < rating; i++) {
      stars.push(<img src={staron} alt="star on" key={i} />);
    }
  
    for (let i = rating; i < 5; i++) {
      stars.push(<img src={staroff} alt="star off" key={i} />);
    }
  
    return stars;
  };

  return (
    <div>
      <Header />
      <section className="house">
        <Carousel pictures={accommodation.pictures} />
        <h2 className="house-title">{accommodation.title}</h2>
        <p className="house-text">{accommodation.location}</p>
        <div className="tag-container">
          {accommodation.tags.map((tag, index) => (
            <div className="house-tag" key={index}>
              <h3 className="tag-text">{tag}</h3>
            </div>
          ))}
        </div>
        <div className="rating">
          <div className="stars">{renderStars(parseInt(accommodation.rating))}</div>
          <div className="rating-content">
            <p className="rating-text">{accommodation.host.name}</p>
            <img src={accommodation.host.picture} className="rating-circle" alt="Circle" />
          </div>
        </div>
        <Colapse />
      </section>
      <Footer />
    </div>
  );
}

export default HousingSheet;
