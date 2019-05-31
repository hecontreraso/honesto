import React from "react";

import "./TextInput.scss";

interface Props {
  setAnswer: Function;
}
const TextInput: React.FC<Props> = props => {
  return (
    <div className="text-input-component">
      <textarea
        className="textarea"
        placeholder="Say something"
        rows={6}
        maxLength={500}
        onChange={({ target }) => props.setAnswer(target.value)}
      />
    </div>
  );
};

export default TextInput;
