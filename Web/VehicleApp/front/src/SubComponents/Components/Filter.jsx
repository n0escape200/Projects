import React from "react";
import "../CSS/Filter.css";
const Filter = () => {
  return (
    <div className="filterMain">
      <div className="filterContent">
        <div className="filters">
          <div className="label">
            <select name="" id="">
              <option value="">Brand</option>
            </select>
          </div>
          <div className="label">
            <select name="" id="">
              <option value="">Model</option>
            </select>
          </div>
          <div className="label">
            <select name="" id="">
              <option value="">Year Start</option>
            </select>
          </div>
          <div className="label">
            <select name="" id="">
              <option value="">Year End</option>
            </select>
          </div>
        </div>
        <div className="submit">Submit</div>
      </div>
    </div>
  );
};

export default Filter;
