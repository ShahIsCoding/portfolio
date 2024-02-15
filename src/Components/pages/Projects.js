import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectsDetails = [
    {
      name: "Dochub",
      desc: "Collaborative platform for real-time document editing, fostering seamless teamwork and innovation.",
      techStack:
        "ReactJs, React-Redux, Javascript, SocketIo,Nodejs, MongoDb, TailwindCss",
      githubLink: "https://github.com/ShahIsCoding/DocHub",
      imgURL: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43",
    },
    {
      name: "Tinder Clone",
      desc: "MERN Stack project: Tinder clone with real-time features, modern UI, and seamless user interactions.",
      techStack: "ReactJs, Jsonwebtoken, Bootsrap, NodeJS, MongoDB, ExpressJS",
      githubLink: "https://github.com/ShahIsCoding/TinderClone.git",
      imgURL: "https://images.unsplash.com/photo-1604871000636-074fa5117945",
    },
    {
      name: "TicTacToe",
      desc: "Tic Tac Toe game: Solo player challenges computer opponent, featuring strategic gameplay and interactive user experience.",
      techStack: "ReactJs, Axios, TailwindCss",
      githubLink: "https://github.com/ShahIsCoding/tictactoe",
      imgURL: "https://images.unsplash.com/photo-1484589065579-248aad0d8b13",
      liveLink: "https://tictactoe-five-sand.vercel.app/",
    },
  ];
  return (
    <div className="md:px-24 p-5 h-screen flex flex-col justify-center border-b  dark:bg-black dark:border-gray-800 dark:text-white">
      <div className=" flex flex-col justify-between ">
        <div className="border-b mb-10">
          <h1 className="text-4xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient">
            Projects & Contributions:
          </h1>
          <h1 className="text-sm pt-5">Things I’ve help built so far</h1>
        </div>
        <div className=" overflow-x-scroll lg:overflow-hidden flex gap-5 md:flex-row flex-col">
          {projectsDetails.map(
            ({ name, desc, techStack, githubLink, imgURL, liveLink }) => {
              return (
                <ProjectCard
                  name={name}
                  desc={desc}
                  techStack={techStack}
                  githubLink={githubLink}
                  imgURL={imgURL}
                  liveLink={liveLink}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
