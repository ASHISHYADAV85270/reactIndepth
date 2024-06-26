import React, { Suspense, lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import { UserContext } from "./utils/UserContext";
import { DarkContext } from "./utils/DarkContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import CartPage from "./components/CartPage";
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const Applayout = () => {
  const [userNameValue, setUserName] = useState("");
  const [isDarkTheme, setDarkTheme] = useState(false);
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          userName: userNameValue,
          setUserName,
          isDarkTheme,
          setDarkTheme,
        }}
      >
        <DarkContext.Provider value={{ isDarkTheme, setDarkTheme }}>
          <div className={`${isDarkTheme ? "bg-gray-900" : ""} `}>
            <Header />
            <Outlet />
          </div>
        </DarkContext.Provider>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contactus", element: <ContactUs /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading.....</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/cart", element: <CartPage /> },

      { path: "/restaurants/:resId", element: <RestaurantDetails /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
