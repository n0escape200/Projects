import React, { useEffect, useState } from "react";
import Navbar from "../../SubComponents/Components/Navbar.jsx";
import Filter from "../../SubComponents/Components/Filter.jsx";
import Listing from "../../SubComponents/Components/Listing.jsx";
import "../CSS/Home.css";

import "../CSS/Home.css";
import axios from "axios";

const Home = () => {
  const [todayData, setTodayData] = useState([]);

  const getTodayCars = async () => {
    axios
      .get("http://localhost:3000/api/car/getTodayCars")
      .then((res) => {
        setTodayData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTodayCars();
  }, []);

  useEffect(() => {
    console.log(todayData);
  }, [todayData]);

  return (
    <div className="homeMain">
      <Navbar />
      <div className="homeContent">
        <div className="homeTop">
          <div className="cover"></div>
          <div className="filter">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
