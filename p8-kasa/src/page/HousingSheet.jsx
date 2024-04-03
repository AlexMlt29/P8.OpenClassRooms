import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../logo/SmallHouse.png';
import staron from '../logo/star-on.png';
import staroff from '../logo/star-off.png';
import circle from '../logo/Host.png';
import vector from '../logo/Vector.png';

function HousingSheet() {
  return (
  <div>
    <Header />
    <body>
      <section className="house">
        <img src={logo} alt="Intérieur d'un salon lumineux, comportant une table à manger, une commode en bois. Une œuvre d'art colorée est accrochée au-dessus de la commode." />
        <h2 className="house-title">Paris Center, on the romantic Canal Saint-Martin</h2>
        <p className="house-text">Paris, Île-de-France</p>
        <div className="tag-container">
          <div className="house-tag"><h3 className="tag-text">Cozy</h3></div>
          <div className="house-tag"><h3 className="tag-text">Canal</h3></div>
          <div className="house-tag"><h3 className="tag-text">Paris 10</h3></div>
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
            <img src={vector} className="rollmenu-image"/>
          </div>
          <div className="rollmenu">
            <p className="rollmenu-text">Équipements</p>
            <img src={vector} className="rollmenu-image"/>
          </div>
        </div>
      </section>
    </body>
    <Footer />
  </div>
  );
}

export default HousingSheet;