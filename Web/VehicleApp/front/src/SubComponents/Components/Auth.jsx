import "../CSS/Auth.css";

const Auth = ({ type = "login" }) => {
  return (
    <div className="authMain">
      <div className="authBackground"></div>
      <div className="authContent">
        {type == "login" ? (
          <>
            <span style={{ fontSize: 36, fontWeight: 700 }}>Welcome back</span>
            <span style={{ fontWeight: 700, color: "rgba(0,0,0,0.55)" }}>
              Please enter your details
            </span>
            <div className="label">
              <span>Username</span>
              <input type="text" placeholder="yourName@domain.com" />
            </div>
            <div className="label">
              <span>Password</span>
              <input type="text" placeholder="********" />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Auth;
