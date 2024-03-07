import React, { useEffect, useState } from "react";
import Auth from "./Auth.jsx";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faCartArrowDown,
  faComments,
  faPerson,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [authPanel, setAuthPanel] = useState(0);

  return (
    <div className="navbarMain">
      <div className="navbarContent">
        <div className="left">
          <span style={{ fontSize: 32 }}>Automoto</span>
        </div>
        <div style={{ fontSize: 23 }} className="right">
          <span>Dealers</span>
          <span>Sellers</span>
          <div>
            <span
              onClick={() => {
                if (authPanel != 1) {
                  setAuthPanel(1);
                } else {
                  setAuthPanel(0);
                }
              }}
              className="authButton"
            >
              Sign up{" "}
            </span>
            or
            <span
              onClick={() => {
                if (authPanel != 2) {
                  setAuthPanel(2);
                } else {
                  setAuthPanel(0);
                }
              }}
              className="authButton"
            >
              {" "}
              Sign in
            </span>
          </div>
          <span className="postButton">Post ad</span>
          <FontAwesomeIcon icon={faComments} />
          <div style={{ position: "relative" }}>
            <FontAwesomeIcon icon={faUser} />
            <FontAwesomeIcon icon={faCaretUp} />
          </div>
        </div>
      </div>
      {authPanel == 1 ? <Auth /> : <></>}
    </div>
  );
};

export default Navbar;
