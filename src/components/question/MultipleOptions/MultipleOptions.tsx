import React, { useState } from "react";

import "./MultipleOptions.scss";

interface Props {
  options: string[] | undefined;
  setAnswer: Function;
}
const MultipleOptions: React.FC<Props> = props => {
  const [selected, setSelected] = useState(-1);

  const { options } = props;
  if (!options) return null;

  const onOptionClicked = (index: number) => {
    if (!options) return;

    props.setAnswer(options[index]);
    setSelected(index);
  };

  return (
    <div className="multiple-options-component">
      {options.map((option, index) => (
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
