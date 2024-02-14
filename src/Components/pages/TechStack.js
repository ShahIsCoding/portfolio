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
    <div className="h-screen md:px-24 p-5 flex flex-col justify-center border dark:border-gray-800 dark:bg-black dark:text-white">
      <div className="h-2/4  flex flex-col justify-between">
        <div className="border-b mb-5">
          <h1 className="text-4xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient">
            My Tech Stack
          </h1>
          <h1 className="text-sm pt-5">
            Technologies I’ve been working with recently
          </h1>
        </div>
        <div className="grid lg:grid-cols-7 grid-cols-3 gap-3 overflow-y-scroll lg:overflow-hidden">
          {techStack.map(({ src, name }, idx) => {
            return <Stack src={src} name={name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
