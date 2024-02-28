import "../CSS/Auth.css";

const Auth = ({ type = "login" }) => {
  return (
    <div className="authMain">
      <div className="authContent">
        {type == login ? (
          <div className="login">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="" />
          </div>
        ) : (
          <div className="register"></div>
        )}
      </div>
    </div>
  );
};

export default Auth;
