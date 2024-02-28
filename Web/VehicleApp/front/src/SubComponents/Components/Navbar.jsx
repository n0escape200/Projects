import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";

import "../CSS/NavBar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbarMain">
      <div className="navbarContent">
        <div className="left">
          <FontAwesomeIcon icon={faGasPump} />
          <span>Masina.ro</span>
        </div>
        <div className="right">
          <span className="login">Login</span>/
          <span className="login">Register</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
