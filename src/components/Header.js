import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { DarkContext } from "../utils/DarkContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { userName } = useContext(UserContext);
  const { isDarkTheme, setDarkTheme } = useContext(DarkContext);
  const onlineStatus = useOnlineStatus();

  // subscribing to the store  using the selector
  const cartItems = useSelector((appStore) => appStore.cart.items);

  return (
    <div
      className={
        `${isDarkTheme ? "bg-black shadow-gray-800  " : "shadow-slate-100"}` +
        " header flex justify-between items-center h-24 shadow-lg "
      }
    >
      <div className="logo-container">
        <img className="logo w-40 rounded-lg " src={LOGO_URL} />
      </div>
      <div>
        <ul
          className={
            `${isDarkTheme ? "text-slate-400" : "text-gray-800"}` +
            " flex p-4  gap-6  items-center text-xl"
          }
        >
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
          <li className="text-2xl">
            <Link to="/cart">
              🛒 {cartItems.length ? `${cartItems.length}` : ""}
            </Link>
          </li>
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
              {btnName}{" "}
              <span className="text-xl text-red-700 uppercase">
                {userName}{" "}
              </span>
            </button>
          </li>
          <li>
            <div className="w-12 h-6 bg-gray-400 rounded-full shadow-inner toggle__line">
              <div
                className={`${
                  isDarkTheme
                    ? "translate-x-6 bg-white"
                    : "translate-x-0 bg-black"
                } w-6 h-6  border border-gray-400 rounded-full shadow-md transform transition-transform duration-300 toggle__dot cursor-pointer`}
                onClick={() => {
                  setDarkTheme(!isDarkTheme);
                }}
              ></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header };
