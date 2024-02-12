import React from "react";
import Home from "./pages/Home";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";

const Body = () => {
  return (
    <div className="h-screen w-screen bg-slate-50">
      <Home />
      <TechStack />
      <Projects />
    </div>
  );
};

export default Body;
