import React, { useState } from "react";
import vector from "../logo/vector.png";
import data from "../data/file.json";
import { useParams } from "react-router-dom";

function Colapse() {
  let { id } = useParams();
  let accommodation = data.find((item) => item.id === id);

  const [rotatedStates, setRotatedStates] = useState({});
  const [expandedStates, setExpandedStates] = useState({});

  const handleImageClick = (imageId) => {
    setRotatedStates((prevState) => {
      const isRotated = prevState[imageId];
      const newRotatedStates = {
        ...prevState,
        [imageId]: !isRotated,
      };
      return newRotatedStates;
    });

    setExpandedStates((prevState) => {
      const isExpanded = prevState[imageId];
      const newExpandedStates = {
        ...prevState,
        [imageId]: !isExpanded,
      };
      return newExpandedStates;
    });
  };

  function getImageStyle(imageId) {
    let style = {
      transition: "transform 300ms ease",
    };

    if (rotatedStates[imageId]) {
      style.transform = "rotate(-180deg)";
    } else {
      style.transform = "rotate(0deg)";
    }

    return style;
  }

  const isExpanded = (menuId) => {
    return expandedStates[menuId];
  };

  return (
    <div className="rollmenu">
      <div className={`rollmenu-header ${isExpanded("description") ? "no-margin" : ""}`}>
        <p className="rollmenu-text">Description</p>
        <img src={vector} className="rollmenu-image" onClick={() => handleImageClick("description")} style={getImageStyle("description")} alt="Description toggle" />
      </div>

      {isExpanded("description") && <p className={`rollmenu-content ${isExpanded("description")}`}>{accommodation.description}</p>}

      {isExpanded("description") && <div className="rollmenu-spacing"></div>}

      <div className={`rollmenu-header ${isExpanded("equipments") ? "no-margin" : ""}`}>
        <p className="rollmenu-text">Équipements</p>
        <img src={vector} className="rollmenu-image" onClick={() => handleImageClick("equipments")} style={getImageStyle("equipments")} alt="Equipments toggle" />
      </div>

      {isExpanded("equipments") && (
        <div className={`rollmenu-content ${isExpanded("equipments")}`}>
          {accommodation.equipments.map((equipment, index) => (
            <span className="equipments-display" key={index}>
              {equipment}
            </span>
          ))}
        </div>
      )}

      {isExpanded("equipments") && <div className="rollmenu-spacing"></div>}
    </div>
  );
}

export default Colapse;
