import React from "react";
import "./userCard.css";



export const Usercard = ({children}) => {
  return(
    <div className="usercard">
      {children}
    </div>
  );
};
