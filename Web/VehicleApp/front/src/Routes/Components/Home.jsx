import React from "react";
import Navbar from "../../SubComponents/Components/Navbar.jsx";
import Filter from "../../SubComponents/Components/Filter.jsx";
import "../CSS/Home.css";

import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="homeMain">
      <Navbar />
      <div className="homeContent">
        <div className="homeTop">
          <div className="content">
            <Filter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
