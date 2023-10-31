import React from "react";
import { About } from "../component/About";
import { Project } from "../component/Project";

export const Home = () => {
  return (
    <div className="container-fluid mx-auto h-100 border">
      <About />
      <Project />
    </div>
  );
};
