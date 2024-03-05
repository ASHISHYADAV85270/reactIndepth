import React from "react";
import ReactDOM from "react-dom/client";
const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src="https://1000logos.net/wp-content/uploads/2021/10/Batman-Logo.png"
        alt="Logo"
        width={"50"}
        height={"50"}
      />
      <input type="text" />
      <img
        src="https://e7.pngegg.com/pngimages/869/794/png-clipart-computer-icons-registered-user-login-user-profile-others-blue-logo.png"
        alt="Logo"
        width={"50"}
        height={"50"}
        
      />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />);
