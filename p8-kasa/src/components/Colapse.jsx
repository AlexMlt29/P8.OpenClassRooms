import React, { useState } from "react";
import vector from "../logo/vector.png";

function Colapse({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const imageClick = () => {
    setIsExpanded(!isExpanded);
  };

  const imageStyle = () => ({
    transform: isExpanded ? "rotate(-180deg)" : "rotate(0deg)",
    transition: "transform 600ms ease",
  });

  return (
    <div className="rollmenu">
      <div className={`rollmenu-header ${isExpanded ? "no-margin" : ""}`}>
        <p className="rollmenu-title">{title}</p>
        <img src={vector} className="rollmenu-image" onClick={imageClick} style={imageStyle()} alt={`${title} toggle`} />
      </div>

      <div className={`rollmenu-content-parent ${isExpanded ? "rollmenu-content-show" : ""}`}>
        <div className="rollmenu-content">
          {children}
        </div>
      </div>

      {isExpanded && <div className="rollmenu-spacing"></div>}
    </div>
  );
}

export default Colapse;
