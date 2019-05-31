import React from "react";

import "./PersonRow.scss";
import { IUser } from "types/types";

interface Props {
  onClick?: Function;
  selected?: boolean;
  user: IUser;
}
const PersonRow: React.FC<Props> = props => {
  const { selected, user } = props;

  const selectedClass = selected ? "person-row-selected" : "";
  return (
    <div className={`person-row ${selectedClass}`}>
      <div className="left">
        <img src={user.thumbnailUrl} alt="person" className="image" />
        <span>{user.name}</span>
      </div>
      {props.children}
    </div>
  );
};

export default PersonRow;
