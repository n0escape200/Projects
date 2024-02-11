import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import "../CSS/NavBar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [token, setToken] = useState(undefined);
  const [logInFail, setLogInFail] = useState(true);
  const [register, setRegister] = useState(0);
  const [completeReg, setCompleteReg] = useState(false);
  const [loginBox, setLoginBox] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [registerFail, setRegisterFail] = useState(false);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    confirm: "",
    email: "",
  });

  const loginMth = async () => {
    if (loginData.username == "") {
      setLoginError("Username required");
      setLogInFail(false);
      setTimeout(() => {
        setLogInFail(true);
        setLoginError("");
      }, 1500);
      return;
    } else {
      if (loginData.password == "") {
        setLoginError("Password required");
        setLogInFail(false);
        setTimeout(() => {
          setLogInFail(true);
          setLoginError("");
        }, 1500);
        return;
      }
    }

    await axios
      .post("http://localhost:3000/api/user/login", loginData, {
        withCredentials: true,
      })
      .then(() => {
        setLogin(false);
      })
      .catch((err) => {
        setLoginError("Credentials Incorrect");
        setLogInFail(false);
      });
    setToken(Cookies.get("User"));

    setTimeout(() => {
      setLogInFail(true);
      setLoginError("");
    }, 1500);
  };

  const logOut = () => {
    Cookies.remove("User");
    setToken(undefined);
  };

  const registerMth = async () => {
    await axios
      .post("http://localhost:3000/api/user/register", {
        username: registerData.username,
        email: registerData.email,
        password: registerData.password,
      })
      .then((_) => {
        setRegister(0);
        setCompleteReg(true);
        setTimeout(() => {
          setCompleteReg(false);
        }, 1500);
      })
      .catch((err) => {
        setRegisterFail(true);
        setTimeout(() => {
          setRegisterFail(false);
        }, 1500);
      });
  };

  useEffect(() => {
    const cookieToken = Cookies.get("User");
    if (cookieToken) {
      setToken(cookieToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setLoginData({
        username: decoded.findUser.username,
      });
    }
  }, [token]);

  const handleLoginUsername = (event) => {
    setLoginData({ ...loginData, username: event.target.value });
  };
  const handleLoginPassword = (event) => {
    setLoginData({ ...loginData, password: event.target.value });
  };

  const handleRegisterUsername = (event) => {
    setRegisterData({ ...registerData, username: event.target.value });
  };
  const handleRegisterPassword = (event) => {
    setRegisterData({ ...registerData, password: event.target.value });
  };
  const handleRegisterConfirm = (event) => {
    setRegisterData({ ...registerData, confirm: event.target.value });
  };
  const handleRegisterEmail = (event) => {
    setRegisterData({ ...registerData, email: event.target.value });
  };

  return (
    <div className="navbarMain">
      <div className="left">
        <span
          onClick={() => {
            navigate("/");
          }}
          className="logo"
        >
          Vehicle Website
        </span>
      </div>
      <div className="right">
        {token == undefined ? (
          <>
            <span
              onClick={() => {
                setLogin(!login);
                setLogInFail(true);
                setRegister(0);
                setLoginData({
                  username: "",
                  password: "",
                });
                setRegisterData({
                  username: "",
                  password: "",
                  confirm: "",
                  email: "",
                });
              }}
              className="user"
            >
              User
            </span>
          </>
        ) : (
          <>
            <div className="logedInDetails">
              <span
                onClick={() => {
                  navigate("/add");
                }}
                className="addButton"
              >
                Add +
              </span>
              <div
                onClick={() => {
                  setLoginBox(!loginBox);
                }}
                className="userLogedIn"
              >
                {loginData.username}
              </div>
              {loginBox && (
                <>
                  <div className="accountBoxMain">
                    <div className="accountBoxContent">
                      <span>Account</span>
                      <span>Favourite</span>
                      <span>Help</span>
                      <span
                        onClick={() => {
                          logOut();
                          setLoginBox(false);
                        }}
                      >
                        Log out
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
        {login == true && (
          <>
            {register == 0 ? (
              <>
                <div className="loginRegisterMain">
                  <div className="loginRegisterContent">
                    <span
                      className="loginSelect"
                      onClick={() => setRegister(1)}
                    >
                      Login
                    </span>
                    <span>/</span>
                    <span
                      className="loginSelect"
                      onClick={() => setRegister(2)}
                    >
                      Register
                    </span>
                  </div>
                  {completeReg && (
                    <>
                      <div className="completeReg">User registrated</div>
                    </>
                  )}
                </div>
              </>
            ) : register == 1 ? (
              <>
                <div className="loginMain">
                  <div className="loginBox">
                    <div className="label">
                      <span>Username:</span>
                      <input
                        type="text"
                        name=""
                        id="username"
                        onChange={handleLoginUsername}
                      />
                    </div>
                    <div className="label">
                      <span>Password:</span>
                      <input
                        type="password"
                        name=""
                        id="password"
                        onChange={handleLoginPassword}
                      />
                    </div>
                    <span
                      onClick={() => {
                        loginMth();
                      }}
                      className="loginBtn"
                    >
                      Login
                    </span>
                  </div>
                  {!logInFail && (
                    <>
                      <div className="failMsg">{loginError}</div>
                    </>
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="registerMain">
                  <div className="registerContent">
                    <div className="label">
                      <span>Username:</span>
                      <input
                        onChange={handleRegisterUsername}
                        type="text"
                        name=""
                        id="usernameReg"
                      />
                    </div>
                    <div className="label">
                      <span>Password:</span>
                      <input
                        onChange={handleRegisterPassword}
                        type="password"
                        name=""
                        id="passwordReg"
                      />
                    </div>
                    <div className="label">
                      <span>Confirm:</span>
                      <input
                        onChange={handleRegisterConfirm}
                        type="password"
                        name=""
                        id="confirmReg"
                      />
                    </div>
                    <div className="label">
                      <span>Email:</span>
                      <input
                        onChange={handleRegisterEmail}
                        type="email"
                        name=""
                        id="emailReg"
                      />
                    </div>
                    <span onClick={() => registerMth()} className="loginBtn">
                      Register
                    </span>
                  </div>
                  {registerFail && (
                    <div className="failMsg">User already exists</div>
                  )}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
