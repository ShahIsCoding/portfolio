import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="w-screen bg-black ">
      <div className="z-50 fixed top-0  w-full ">
        <Navbar />
      </div>
      <Body />
    </div>
  );
};

export default App;
