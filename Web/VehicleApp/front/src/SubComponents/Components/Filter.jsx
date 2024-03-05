import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import SelectYear from "../../SubComponents/Components/SelectYear.jsx";
import SelectPrice from "./SelectPrice.jsx";
import "../CSS/Filter.css";
import axios from "axios";
const Filter = () => {
  const [yearPanel, setYearPanel] = useState(false);
  const [pricePanel, setPricePanel] = useState(false);
  const [brandPanel, setBrandPanel] = useState(false);
  const [modelPanel, setModelPanel] = useState(false);

  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("2024");

  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");

  const [data, setData] = useState();
  const [brandArray, setBrandArray] = useState([]);

  const [brand, setBrand] = useState("");

  const getData = async () => {
    await axios
      .get("http://localhost:3000/api/data/getData")
      .then((res) => {
        setData(res.data[0].data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const array = [];
    if (data) {
      data.map((item) => {
        array.push(item.brand);
      });
      setBrandArray(array);
    }
  }, [data]);

  return (
    <div className="filterMain">
      <div className="filterContent">
        <div style={{ position: "relative" }} className="label">
          <input
            placeholder=" "
            className="labelField"
            type="text"
            name=""
            id=""
            value={brand}
            onChange={(event) => {
              setBrand(event.target.value);
              const filtered = data.filter((item) => {
                const value = item.brand.toUpperCase();
                return value.includes(event.target.value.toUpperCase());
              });
              const array = [];
              filtered.map((item) => {
                array.push(item.brand);
              });
              setBrandArray(array);
            }}
            onFocus={() => {
              setBrandPanel(true);
            }}
          />
          <span className="labelText">Brand</span>
          {brandPanel && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                border: "1px solid black",
                top: 65,
                padding: "0px 10px 0px 10px",
              }}
            >
              {brandArray && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: 200,
                    width: "fit-content",
                    overflow: "scroll",
                    overflowX: "hidden",
                  }}
                >
                  {brandArray.map((item, index) => {
                    return (
                      <option
                        value={item}
                        onClick={(event) => {
                          setBrand(event.target.value);
                          setBrandPanel(false);
                        }}
                        key={index}
                      >
                        {item}
                      </option>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          <div style={{ top: "50%", right: -20 }} className="column"></div>
        </div>

        <div style={{ position: "relative" }} className="label">
          <input
            placeholder=" "
            className="labelField"
            type="text"
            name=""
            id=""
          />
          <span className="labelText">Model </span>
          <div style={{ top: "50%", right: -20 }} className="column"></div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
          className="label"
        >
          <span>Year </span>
          <FontAwesomeIcon
            onClick={() => setYearPanel(!yearPanel)}
            size="xs"
            icon={faChevronDown}
            className="yearDropdown"
          />

          {yearPanel && (
            <SelectYear
              fromYear={fromYear}
              setFromYear={setFromYear}
              toYear={toYear}
              setToYear={setToYear}
              setYearPanel={setYearPanel}
            />
          )}
          <div
            style={{
              position: "absolute",
              display: "flex",
              top: 35,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 19,
              borderTop: "1px solid black",
            }}
          >
            <span>{fromYear}</span>
            <FontAwesomeIcon icon={faArrowRightLong} />
            <span>{toYear}</span>
          </div>
          <div style={{ top: "50%", right: -30 }} className="column"></div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
          className="label"
        >
          <span>Price </span>
          <FontAwesomeIcon
            className="yearDropdown"
            size="xs"
            icon={faChevronDown}
            onClick={() => {
              setPricePanel(!pricePanel);
            }}
          />
          {pricePanel && (
            <SelectPrice
              fromPrice={fromPrice}
              setFromPrice={setFromPrice}
              toPrice={toPrice}
              setToPrice={setToPrice}
              setPricePanel={setPricePanel}
            />
          )}
          <div style={{ top: "50%", right: -20 }} className="column"></div>
        </div>
        <span className="submitBtn">SUBMIT</span>
      </div>
    </div>
  );
};

export default Filter;
