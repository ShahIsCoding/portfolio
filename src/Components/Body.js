import React, { useEffect } from "react";
import Home from "./pages/Home";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Aboutme from "./pages/Aboutme";

const Body = () => {
  return (
    <div className="h-screen w-screen bg-slate-50 ">
      <div id="home">
        <Home />
      </div>
      <div id="aboutme">
        <Aboutme />
      </div>
      <div id="techStack">
        <TechStack />
      </div>
      <div id="project">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Body;
