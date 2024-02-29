import React, { useEffect, useState } from "react";
import Auth from "./Auth.jsx";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGasPump, faLinesLeaning } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import "../CSS/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [authPanel, setAuthPanel] = useState(false);
  const [token, setToken] = useState(undefined);
  const [userData, setUserData] = useState(undefined);
  const [userOptions, setUserOptions] = useState(false);

  useEffect(() => {
    setToken(Cookies.get("User"));
  }, []);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserData(decoded.findUser);
    }
  }, [token]);

  const [closeTab, setCloseTab] = useState(false);

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
          {token ? (
            <>
              {userData && (
                <div style={{ position: "relative" }}>
                  <div style={{ borderBottom: "1px solid black" }}>
                    <span style={{ marginRight: 10 }}>{userData.username}</span>
                    <FontAwesomeIcon
                      onClick={() => {
                        setUserOptions(!userOptions);
                      }}
                      className="userDataIcon"
                      icon={faLinesLeaning}
                    />
                  </div>
                  {userOptions && (
                    <div className="userOptions">
                      <span className="option">Account</span>
                      <span
                        onClick={() => {
                          Cookies.remove("User");
                          setToken(undefined);
                        }}
                        className="option"
                      >
                        LogOut
                      </span>
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
      {authPanel && !closeTab && (
        <div>
          <div className="authPanel">
            <div className="content">
              {authPanel == "login" ? (
                <Auth
                  setAuthPanel={setAuthPanel}
                  setToken={setToken}
                  setCloseTab={setCloseTab}
                />
              ) : (
                <Auth
                  type="register"
                  setAuthPanel={setAuthPanel}
                  setCloseTab={setCloseTab}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
