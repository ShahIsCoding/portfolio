import React from "react";
import Home from "./pages/Home";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Aboutme from "./pages/Aboutme";

const Body = () => {
  return (
    <div className="h-screen w-screen bg-slate-50">
      <Home />
      <Aboutme />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
};

export default Body;
