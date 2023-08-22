import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import OrderReview from "./components/OrderReview/OrderReview.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import NoFound from "./components/NoFound/NoFound.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('tshirts.json')
     },
      {
        path: '/contact',
        element: <Contact></Contact>
     },
      {
        path: '/review',
        element: <OrderReview></OrderReview>
     },
      {
        path: '/about',
        element: <About></About>
     },
      {
        path: '*',
        element: <NoFound></NoFound>
     },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
