import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "../CSS/Auth.css";
import Cookies from "js-cookie";

const Auth = ({ type = "login", setAuthPanel, setToken, setCloseTab }) => {
  //used for checking click outside panel
  const authPanelRef = useRef(null);

  //checking if the user is clicking outside the panel
  useEffect(() => {
    const handleClick = (event) => {
      if (
        authPanelRef.current &&
        !authPanelRef.current.contains(event.target)
      ) {
        setAuthPanel(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [authPanelRef]);

  //Data payloads for the APi requests
  const [loginPayload, setLoginPayload] = useState({
    username: "",
    password: "",
  });
  const [registerPayload, setRegisterPayload] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  //API requests
  const loginRequest = async () => {
    await axios
      .post("http://localhost:3000/api/user/login", loginPayload, {
        withCredentials: true,
      })
      .then((res) => {
        setToken(Cookies.get("User"));
        setCloseTab(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const registerRequest = async () => {
    await axios
      .post("http://localhost:3000/api/user/register", registerPayload)
      .then((res) => {
        setCloseTab(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginRegister = () => {
    if (type == "login") {
      return (
        <div>
          <span style={{ fontSize: 32 }}>Login user:</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span>Username:</span>
            <input
              style={{ fontSize: 23 }}
              type="text"
              placeholder="John...."
              onChange={(event) => {
                setLoginPayload({
                  ...loginPayload,
                  username: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
            }}
          >
            <span>Password</span>
            <input
              style={{ fontSize: 23 }}
              type="password"
              placeholder="......"
              onChange={(event) => {
                setLoginPayload({
                  ...loginPayload,
                  password: event.target.value,
                });
              }}
            />
          </div>
          <span className="forgotPsw">Forgot password?</span>
        </div>
      );
    } else {
      return (
        <div>
          <span style={{ fontSize: 32 }}>Register user:</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span>Username:</span>
            <input
              style={{ fontSize: 23 }}
              type="text"
              placeholder="myAlias...."
              onChange={(event) => {
                setRegisterPayload({
                  ...registerPayload,
                  username: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
            }}
          >
            <span>First name</span>
            <input
              style={{ fontSize: 23 }}
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setRegisterPayload({
                  ...registerPayload,
                  firstname: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
            }}
          >
            <span>Last name</span>
            <input
              style={{ fontSize: 23 }}
              type="text"
              placeholder="Smith..."
              onChange={(event) => {
                setRegisterPayload({
                  ...registerPayload,
                  lastname: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
            }}
          >
            <span>Email</span>
            <input
              style={{ fontSize: 23 }}
              type="text"
              placeholder="yourName@domain.org..."
              onChange={(event) => {
                setRegisterPayload({
                  ...registerPayload,
                  email: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
            }}
          >
            <span>Phone</span>
            <input
              style={{ fontSize: 23 }}
              type="text"
              placeholder="0741234294..."
              onChange={(event) => {
                setRegisterPayload({
                  ...registerPayload,
                  phone: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
            }}
          >
            <span>Password</span>
            <input
              style={{ fontSize: 23 }}
              type="password"
              placeholder="......"
              onChange={(event) => {
                setRegisterPayload({
                  ...registerPayload,
                  firstname: event.target.value,
                });
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginTop: 20,
            }}
          >
            <span>Confirm password:</span>
            <input
              style={{ fontSize: 23 }}
              type="password"
              placeholder="......"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div ref={authPanelRef} className="authMain">
      <div className="authContent">
        {loginRegister()}
        <input
          style={{
            width: "100%",
            fontSize: 27,
            padding: "5px 10px 5px 10px",
            marginTop: 20,
          }}
          type="submit"
          value="SUBMIT"
          onClick={() => {
            if (type == "login") {
              loginRequest();
            } else {
              registerRequest();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Auth;
