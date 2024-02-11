import React from "react";
import Result from "../Components/SmallResult.jsx";
import "../CSS/HomeResults.css";

const HomeResults = () => {
  return (
    <div className="homeresultMain">
      <div className="homeresultContent">
        <Result />
        <Result />
        <Result />
      </div>
    </div>
  );
};

export default HomeResults;
