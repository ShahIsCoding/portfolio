import React from "react";
import github from "../assets/github.png";
import link from "../assets/link.png";
const ProjectCard = ({
  name,
  desc,
  techStack,
  githubLink,
  imgURL,
  isContributed = false,
  liveLink,
}) => {
  return (
    <div className="rounded-xl md:w-1/2 dark:bg-white text-black flex flex-row">
      <div className="md:h-40 md:w-full h-32 w-10">
        <img src={imgURL} />
      </div>
      <div className="p-3 flex flex-col justify-between text-left w-full">
        <div className="flex justify-between">
          <h1 className="font-bold">{name}</h1>
          {liveLink && (
            <a href={liveLink} target="_blank">
              <img src={link} alt="live" className="w-6 bg-white " />
            </a>
          )}
        </div>
        <p className="text-sm py-2 ">{desc}</p>
        <div className="text-xs py-2 ">Tech Stack : {techStack}</div>
        <div
          className="flex flex-row items-center cursor-pointer w-full"
          onClick={() =>
            window.open(
              githubLink || "https://github.com/ShahIsCoding",
              "blank"
            )
          }
        >
          <div className="w-8 h-8 mr-2 ">
            <img src={github} alt="github" className="w-full" />
          </div>
          <h6 className="text-xs underline pointer ">View Code</h6>
          {isContributed && (
            <h6 className="text-xs text-gray-400 text-right flex-grow">
              Contributed
            </h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
