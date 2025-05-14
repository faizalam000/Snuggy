import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Container = () => {
  return <>
  <Navbar/>
  <Body/>
  <Footer/>
  </>;
};

root.render(<Container/>);
