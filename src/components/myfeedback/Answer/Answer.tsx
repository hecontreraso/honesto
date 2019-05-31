import React, { useState } from "react";
import "./Answer.scss";

interface Props {}
const Answer: React.FC<Props> = props => {
  const [selectedPerson, setSelectedPerson] = useState(-1);

  // if type === 'multiple'
  // rangeSize = question.options.size
  // else if type === 'range'
  // rangeSize = 10

  return (
    <div className="answer-component">
      <div className="answer-title">
        <p>
          How well did this person do X thing last month Lorem ipsum dolor sit
          amet Lorem ipsum dolor?
        </p>
      </div>
      <div className="color-bars">
        <div className="range-container">
          {[...Array(10)].map((_, index) => (
            <div className="step" key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Answer;
