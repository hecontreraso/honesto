import React from "react";
import "./UserItem.scss";
import photo from "./user-photo.png";

const UserItem: React.FC = () => {
  return (
    <div className="navbar-item user-item">
      <img alt="user" src={photo} className="photo" />
      <div className="text-container">
        <span className="name">Jane Smith</span>
        <span className="logout">Logout</span>
      </div>
    </div>
  );
};

export default UserItem;
