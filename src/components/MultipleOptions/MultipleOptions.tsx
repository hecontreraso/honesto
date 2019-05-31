import React from "react";
import { IQuestion } from "types/types";

import "./MultipleOptions.scss";

interface Props {
  question: IQuestion;
}
const MultipleOptions: React.FC<Props> = props => {
  const { question } = props;

  if (!question.options) return null;
  return (
    <div className="multiple-options-component">
      {question.options.map((option, index) => (
        <div className="question" key={index}>
          <p>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default MultipleOptions;
