import React, { useState } from "react";
import vector from "../logo/vector.png";

function Colapse({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };

  const getImageStyle = () => ({
    transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 600ms ease",
  });

  return (
    <div className="rollmenu">
      <div className={`rollmenu-header ${isExpanded ? "no-margin" : ""}`}>
        <p className="rollmenu-title">{title}</p>
        <img src={vector} className="rollmenu-image" onClick={handleImageClick} style={getImageStyle()} alt={`${title} toggle`} />
      </div>

      {isExpanded && (
        <div className="rollmenu-content">
          {children}
        </div>
      )}

      {isExpanded && <div className="rollmenu-spacing"></div>}
    </div>
  );
}

export default Colapse;
