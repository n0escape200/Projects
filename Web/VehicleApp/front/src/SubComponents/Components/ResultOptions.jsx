import React from "react";
import Option from "./Option.jsx";
import "../CSS/ResultOptions.css";

const ResultOptions = () => {
  return (
    <div className="resultoptionsMain">
      <div className="resultoptionsContent">
        {Array.from({ length: 30 }, (_, index) => (
          <Option key={index} />
        ))}
      </div>
    </div>
  );
};

export default ResultOptions;
