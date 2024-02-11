import React from "react";
import "../CSS/Results.css";
import Navbar from "../../SubComponents/Components/Navbar";
import ResultsFilter from "../../SubComponents/Components/ResultsFilter";
import ResultOptions from "../../SubComponents/Components/ResultOptions";

const Results = () => {
  return (
    <div className="resultsMain">
      <div className="resultsContent">
        <Navbar />
        <ResultsFilter />
        <ResultOptions />
      </div>
    </div>
  );
};

export default Results;
