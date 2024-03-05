import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import "../CSS/Filter.css";
const Filter = () => {
  return (
    <div className="filterMain">
      <div className="filterContent">
        <div
          style={{
            position: "relative",
            padding: "15px 0 0",
          }}
          className="label"
        >
          <input className="labelField" type="text" name="" id="" />
          <span className="labelText">Brand</span>
        </div>

        <div
          style={{ position: "relative", padding: "15px 0 0" }}
          className="label"
        >
          <input className="labelField" type="text" name="" id="" />
          <span className="labelText">Model </span>
        </div>

        <div className="label">
          <span>Year</span>
          <FontAwesomeIcon icon={faCircleArrowDown} />
        </div>
        <div className="label">
          <span>Price</span>
          <FontAwesomeIcon icon={faCircleArrowDown} />
        </div>
        <input type="button" value="Submit" />
      </div>
    </div>
  );
};

export default Filter;
