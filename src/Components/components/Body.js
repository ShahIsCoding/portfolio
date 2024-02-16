import React from "react";
import Home from "../pages/Home";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Aboutme from "../pages/Aboutme";

const Body = () => {
  return (
    <div className="h-screen w-screen bg-slate-50 scrollbar">
      <div id="home" className="h-screen w-screen ">
        <Home />
      </div>
      <div id="aboutme" className="h-screen w-screen border">
        <Aboutme />
      </div>
      <div id="techStack" className="h-screen">
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
