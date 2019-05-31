import React from "react";
import { IQuestion } from "types/types";

import "./RangeOptions.scss";

interface Props {
  question: IQuestion;
}
const RangeOptions: React.FC<Props> = props => {
  const { question } = props;

  if (!question.options) return null;
  return <div className="range-component">asd</div>;
};

export default RangeOptions;
