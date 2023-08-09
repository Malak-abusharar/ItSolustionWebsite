import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import  Services from "./pages/services";
import About from "./pages/about";
import LastNews from "./pages/lastNews";
import News from "./pages/news";
import Contact from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
  path: "/lastNews",
  element: <LastNews/>,
},
{
  path: "/News",
  element: <News/>,
},
{
path: "/contact",
element: <Contact/>,
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
