import React, { useState } from "react";

import "./Stars.scss";

function Stars() {
  const [hoveredStep, setHoveredStep] = useState(-1);

  function hoverItems(index: number) {
    setHoveredStep(index);
  }

  function unhoverItems() {
    setHoveredStep(-1);
  }

  return (
    <div className="stars-component">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`star ${
            index <= hoveredStep ? "star-selected" : "star-unselected"
          }`}
          onMouseEnter={() => hoverItems(index)}
          onMouseLeave={unhoverItems}
        />
      ))}

      <div
        className="flag tooltip is-tooltip-multiline"
        data-tooltip="I have feedback about this question, please ask me about it."
      />
    </div>
  );
}

export default Stars;
