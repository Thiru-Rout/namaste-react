import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <Applayout></Applayout>,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu></RestaurantMenu>
      },
    ],
    errorElement: <Error></Error>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);

