import React from "react";
import "../CSS/Filter.css";
const Filter = () => {
  return (
    <div className="filterMain">
      <div className="filterContent">
        <div className="left">
          <span>Cars</span>
          <span>Motorcycles</span>
          <span>Trucks</span>
          <span>Parts</span>
        </div>
        <div className="right">
          <select id="brand">
            <option value="#">Select a brand...</option>
          </select>
          <select id="model">
            <option value="#">Select a model...</option>
          </select>
          <select id="year">
            <option value="#">Select a year...</option>
          </select>
          <span className="search">Search</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
