import React from "react";
import "./userCard.css";



export const Usercard = ({children}) => {
  return(
    <div className="all-user">
      {children}
    </div>
  );
};
