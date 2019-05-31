import React from "react";
import { IQuestion } from "types/types";

import "./RangeOptions.scss";

interface Props {
  question: IQuestion;
}
const RangeOptions: React.FC<Props> = props => {
  const { question } = props;

  return (
    <div className="range-component">
      <div className="range-container">
        {[...Array(10)].map((_, index) => (
          <div className="step" key={index} />
        ))}
      </div>
      <span>8/10</span>
    </div>
  );
};

export default RangeOptions;
