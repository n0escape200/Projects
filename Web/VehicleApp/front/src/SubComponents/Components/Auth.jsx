import { useEffect, useRef } from "react";
import "../CSS/Auth.css";

const Auth = ({ type = "login", setAuthPanel }) => {
  //used for checking click outside panel
  const authPanelRef = useRef(null);

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
            <input style={{ fontSize: 23 }} type="text" placeholder="John..." />
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
        />
      </div>
    </div>
  );
};

export default Auth;
