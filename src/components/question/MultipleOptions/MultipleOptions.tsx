import React, { useState } from "react";
import { IQuestion } from "types/types";

import "./MultipleOptions.scss";

interface Props {
  question: IQuestion;
  setAnswer: Function;
}
const MultipleOptions: React.FC<Props> = props => {
  const [selected, setSelected] = useState(-1);

  const { question } = props;
  if (!question.options) return null;

  const onOptionClicked = (index: number) => {
    if (!question.options) return;

    props.setAnswer(question.options[index]);
    setSelected(index);
  };

  return (
    <div className="multiple-options-component">
      {question.options.map((option, index) => (
        <div
          className={`question ${index === selected && "selected"}`}
          key={index}
          onClick={() => onOptionClicked(index)}
        >
          <p>{option}</p>
        </div>
      ))}
    </div>
  );
};

export default MultipleOptions;
