import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/aboutus"> About Us</Link>
          </li>
          <li>
            <Link to="/contactus"> Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            onClick={() => {
              if (btnName === "Logout") {
                setBtnName("Login");
              } else {
                setBtnName("Logout");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export { Header };
