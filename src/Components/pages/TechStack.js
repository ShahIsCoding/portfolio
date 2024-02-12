import React from "react";
import bootstrap from "../assets/bootstrap.png";
import reactjs from "../assets/react.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import nodejs from "../assets/nodejs.png";
import redux from "../assets/redux.png";
import sass from "../assets/sass.png";
import html5 from "../assets/html5.png";
import springboot from "../assets/springboot.png";
import tailwindcss from "../assets/tailwindcss.png";
import git from "../assets/git.png";
import css from "../assets/css.png";
import mysql from "../assets/mysql.png";
import Stack from "./Stack";

const TechStack = () => {
  const techStack = [
    { name: "HTML5", src: html5 },
    { name: "CSS", src: css },
    { name: "Sass", src: sass },
    { name: "JavaScript", src: javascript },
    { name: "ReactJs", src: reactjs },
    { name: "Bootstrap", src: bootstrap },
    { name: "Tailwind CSS", src: tailwindcss },
    { name: "Redux", src: redux },
    { name: "Node.js", src: nodejs },
    { name: "Java", src: java },
    { name: "Spring", src: springboot },
    { name: "MySQL", src: mysql },
    { name: "MongoDB", src: mongodb },
    { name: "Git", src: git },
  ];

  return (
    <div className="h-screen px-24  flex flex-col justify-center border">
      <div className="h-2/4  flex flex-col justify-between">
        <div className="border-b">
          <h1 className="text-4xl">My Tech Stack</h1>
          <h1 className="text-sm pt-5">
            Technologies I’ve been working with recently
          </h1>
        </div>
        <div className="grid md:grid-cols-7 grid-cols-3 gap-3 ">
          {techStack.map(({ src, name }, idx) => {
            return <Stack src={src} name={name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
