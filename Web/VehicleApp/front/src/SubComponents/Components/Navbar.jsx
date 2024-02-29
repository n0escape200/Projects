import React, { useEffect, useState, useRef } from "react";
import Auth from "./Auth.jsx";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump } from "@fortawesome/free-solid-svg-icons";

import "../CSS/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [authPanel, setAuthPanel] = useState(false);

  return (
    <div className="navbarMain">
      <div className="navbarContent">
        <div className="left">
          <FontAwesomeIcon icon={faGasPump} />
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            Masina.ro
          </span>
        </div>
        <div className="right">
          <span
            onClick={() => {
              setAuthPanel("login");
            }}
            className="login"
          >
            Login
          </span>
          /
          <span
            onClick={() => {
              setAuthPanel("register");
            }}
            className="login"
          >
            Register
          </span>
        </div>
        {authPanel && (
          <div>
            <div className="authPanel">
              <div className="content">
                {authPanel == "login" ? (
                  <Auth setAuthPanel={setAuthPanel} />
                ) : (
                  <Auth type="register" setAuthPanel={setAuthPanel} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
