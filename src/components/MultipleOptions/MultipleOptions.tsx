import React from "react";
import "./MultipleOptions.scss";

const MultipleOptions: React.FC = () => {
  return (
    <div className="multiple-options-component">
      <div className="question">
        <p>
          Please Improve
          <br />
          You may have done one or the following: Maybe you were mostly quiet in
          meetings and when you had something on your mind, you brought it to
          the team afterward. Or, you had feedback that would be valuable to go,
          but you found it too difficult. Or, you had an opportunity to grow by
          doing something uncomfortable but you didn’t.
        </p>
      </div>
      <div className="question">
        <p>
          You Were Good You sometimes participate in meetings but you feel that
          they don’t always bring up important things when they should.
        </p>
      </div>
      <div className="question">
        <p>
          You Were Great I and others can count on your courage to help the team
          do what is right.
        </p>
      </div>
    </div>
  );
};

export default MultipleOptions;