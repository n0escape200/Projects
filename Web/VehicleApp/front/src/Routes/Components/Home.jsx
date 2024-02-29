import React, { useState } from "react";
import Navbar from "../../SubComponents/Components/Navbar.jsx";
import Filter from "../../SubComponents/Components/Filter.jsx";
import "../CSS/Home.css";

import "../CSS/Home.css";

const Home = () => {
  const [todayData, setTodayData] = useState([]);

  return (
    <div className="homeMain">
      <Navbar />
      <div className="homeContent">
        <div className="homeTop">
          <div className="content"></div>
          <Filter />
          <span>Todays picks:</span>
          {todayData.length == 0 ? <></> : <></>}
        </div>
      </div>
    </div>
  );
};

export default Home;
