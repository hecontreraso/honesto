import React from "react";
import "./UserItem.scss";

const UserItem: React.FC = () => {
  return (
    <div className="navbar-item user-item">
      <span className="name">Jane Smith</span>
      <span className="logout">Logout</span>
    </div>
  );
};

export default UserItem;
