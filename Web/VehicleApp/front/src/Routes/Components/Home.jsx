import React from "react";
import Navbar from "../../SubComponents/Components/Navbar.jsx";
import Filter from "../../SubComponents/Components/Filter.jsx";
import Homeresult from "../../SubComponents/Components/HomeResults.jsx";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div className="homeMain">
      <div className="homeContent">
        <div className="homeTop">
          <Navbar />
          <Filter />
          <Homeresult />
        </div>
      </div>
    </div>
  );
};

export default Home;
