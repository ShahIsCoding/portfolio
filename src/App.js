import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

const App = () => {
  return (
    <div className="w-screen bg-black">
      <div className="z-50 fixed top-0  w-full ">{/* <Navbar /> */}</div>
      <Body />
    </div>
  );
};

export default App;
