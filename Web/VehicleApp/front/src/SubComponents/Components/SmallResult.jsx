import React from "react";
import "../CSS/SmallResult.css";

const SmallResult = () => {
  return (
    <div className="smallresultMain">
      <div className="smallresultContent">
        <img src="https://i.imgur.com/2a4RyCx.jpeg" alt="car image" />
        <span>Car title</span>
        <span>Car Brand</span>
        <span>Car modle</span>
        <span>Car year</span>
      </div>
    </div>
  );
};

export default SmallResult;
