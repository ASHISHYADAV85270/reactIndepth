import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { userName } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between items-center  shadow-slate-100 shadow-xl ">
      <div className="logo-container">
        <img className="logo w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items ">
        <ul className="flex p-4  gap-6 text-gray-800">
          <li>OnlineStatus : {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/aboutus"> About Us</Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>
            <Link to="/contactus"> Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              onClick={() => {
                if (btnName === "Logout") {
                  setBtnName("Login");
                } else {
                  setBtnName("Logout");
                }
              }}
            >
              {btnName} {userName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
