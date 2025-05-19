import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import "./index.css";
import Example from "./src/components/Example";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Container = () => {
  return <>
  {/* <Navbar/>
  <Body/>
  <Footer/> */}
  <Example/>
  </>;
};
root.render(<Container/>);