import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/25539c29532269.55f7d6a0a8c71.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard={
//   backgroundColor:'#f0f0f0',
// }

const RestaurantComponent = (props) => {
  const { resName, cuisine, rating, time } = props;
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f62564e14944753903849c4ef673af4d"
        alt="Mac Donald"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h5>{rating}⭐️</h5>
      <h5>{time} minutes</h5>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="searchbar">searchbar</div>
      <div className="res-container">
        <RestaurantComponent
          resName="KFC"
          cuisine="Best Burger Ever In India"
          rating="4.4"
          time="20"
        />
        <RestaurantComponent
          resName="Meghana"
          cuisine="Best Biryani Ever In India"
          rating="4.7"
          time="28"
        />
      </div>
    </div>
  );
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
