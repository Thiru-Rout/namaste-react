import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [loginButton, setloginButton] = useState("Login");

  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.icons8.com/color/96/food.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {isOnline ? "✅" : "❌"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginButton === "Login"
                ? setloginButton("Logout")
                : setloginButton("Login");
            }}
          >
            {loginButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
