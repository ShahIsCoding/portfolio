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
    <div className="px-24 h-screen flex flex-col justify-center">
      <div className="flex flex-col justify-between ">
        <div className="border-b mb-10">
          <h1 className="text-4xl">Projects & Contributions:</h1>
          <h1 className="text-sm pt-5">Things I’ve help built so far</h1>
        </div>
        <div className="flex gap-4">
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
