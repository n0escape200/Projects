import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faGear,
  faGears,
  faMotorcycle,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import "../CSS/Filter.css";
const Filter = () => {
  return (
    <div className="filterMain">
      <div className="filterContent">
        <div className="options">
          <div className="select">
            <FontAwesomeIcon icon={faCar} />
            <span>Car</span>
          </div>
          <div className="select">
            <FontAwesomeIcon icon={faTruck} />
            <span>Car</span>
          </div>
          <div className="select">
            <FontAwesomeIcon icon={faMotorcycle} />
            <span>Car</span>
          </div>
          <div className="select">
            <FontAwesomeIcon icon={faGears} />
            <span>Car</span>
          </div>
        </div>
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
