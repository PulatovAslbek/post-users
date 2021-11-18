import React from "react";
import "./User.css";

const User = (props) => {
  return (
    <p onClick={() => props.clickedUser(props.userId)} className="user">
      User - {props.userId}
    </p>
  );
};

export default User;
