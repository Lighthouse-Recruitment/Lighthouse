import React from "react";
import "./userCard.css";

export const userCard = (props) =>
<div className="userCard">
    <img className="student-img"
      src={props.userImage}
    />;
    <div className="student-info">
      <h2>{props.name}</h2>
      <p>{props.email}</p>
      <p>{props.resume}</p>
      <p>{props.bio}</p>
    </div>
</div>
