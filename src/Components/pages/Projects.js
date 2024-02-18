import React from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

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
    {
      name: "Portfolio",
      desc: "This website",
      techStack: "ReactJs,  Javascript, TailwindCss",
      githubLink: "https://github.com/ShahIsCoding/shahiscodingportfolio",
      imgURL:
        "https://images.unsplash.com/photo-1542052722982-1c9f552a534b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveLink: "https://shahiscoding.vercel.app/",
    },
  ];
  return (
    <Wrapper addedClass="flex flex-col justify-center">
      <Header
        title="Projects & Contributions:"
        subt="Things I’ve help built so far"
      />
      <div className="px-5 h-4/5  overflow-y-auto rounded projectCards lg:grid lg:grid-cols-2 ">
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
    </Wrapper>
  );
};

export default Projects;
