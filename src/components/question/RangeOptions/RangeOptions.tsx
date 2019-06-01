import React, { useState } from "react";

import "./RangeOptions.scss";

interface Props {
  setAnswer: Function;
}
const RangeOptions: React.FC<Props> = props => {
  const [hoveredStep, setHoveredStep] = useState(-1);
  const [selectedStep, setSelectedStep] = useState(-1);

  function hoverItems(index: number) {
    setHoveredStep(index);
  }

  function unhoverItems() {
    setHoveredStep(-1);
  }

  function onClick(index: number) {
    props.setAnswer(index + 1);
    setSelectedStep(index);
  }

  return (
    <div className="range-component">
      <div className="range-container">
        {[...Array(10)].map((_, index) => (
          <div
            className={`step ${index <= hoveredStep && "hovered"}
              ${index <= selectedStep && hoveredStep === -1 && "selected"}
              `}
            key={index}
            onMouseEnter={() => hoverItems(index)}
            onMouseLeave={unhoverItems}
            onClick={() => onClick(index)}
          />
        ))}
      </div>
      <span>{hoveredStep !== -1 ? hoveredStep + 1 : selectedStep + 1}/10</span>
    </div>
  );
};

export default RangeOptions;
