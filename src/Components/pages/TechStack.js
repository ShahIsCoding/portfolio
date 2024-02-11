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

const TechStack = () => {
  const techStack = [
    { name: "html5", src: html5 },
    { name: "css", src: css },
    { name: "sass", src: sass },
    { name: "javascript", src: javascript },
    { name: "react", src: reactjs },
    { name: "bootstrap", src: bootstrap },
    { name: "tailwindcss", src: tailwindcss },
    { name: "redux", src: redux },
    { name: "nodejs", src: nodejs },
    { name: "java", src: java },
    { name: "spring", src: springboot },
    { name: "mysql", src: mysql },
    { name: "mongodb", src: mongodb },
    { name: "git", src: git },
  ];
  return (
    <div className="h-screen px-24  flex flex-col justify-center">
      <div className="h-2/4  flex flex-col justify-between">
        <div className="border-b">
          <h1 className="text-4xl">My Tech Stack</h1>
          <h1 className="text-sm pt-5">
            Technologies I’ve been working with recently
          </h1>
        </div>
        <div className="grid md:grid-cols-7 grid-cols-3 ">
          {techStack.map((stack, idx) => {
            return (
              <div className="flex justify-center">
                <img
                  src={stack.src}
                  alt={"stack.name"}
                  className="w-20 h-20 "
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
