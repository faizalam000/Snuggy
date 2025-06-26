import { React, useState } from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../app/store";
import Body from "../components/Body";
import About from "../Pages/About";
import Card from "../Common/Card";
import Support from "../Pages/Support";
import About from "../Pages/About";
import Cart from "../Pages/Cart";
import CardPage from "../Pages/Cardpage";
import Footer from "../components/Footer";
import { useState } from "react";

export const Container = () => {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/:resturent/:id",
        element: <CardPage />,
      },
    ],
  },
]);
