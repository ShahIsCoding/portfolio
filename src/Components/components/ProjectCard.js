import React from "react";
import github from "../assets/github.png";
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
    <div className="flex bg-white text-black m-1 rounded-xl h-48 border-black  border-4">
      <div className="mr-2 h-full   border-r-2">
        <img
          src={imgURL}
          alt="images"
          className="rounded-s-xl h-full object-cover min-w-32"
        />
      </div>
      <div className="flex flex-col justify-between p-2 w-full">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl">{name}</h1>
        </div>
        <p className="text-sm my-1">{desc}</p>
        <div className="text-xs">Tech Stack : {techStack}</div>
        <div className="flex flex-row justify-between items-center ">
          <div
            className="flex flex-row items-center cursor-pointer hover:underline underline-offset-4 text-xs"
            onClick={() =>
              window.open(
                githubLink || "https://github.com/ShahIsCoding",
                "blank"
              )
            }
          >
            <div className="w-5 m-2">
              <img src={github} alt="github" className="" />
            </div>
            <h6 className="text-xs">View Code</h6>
          </div>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4 text-xs"
            >
              Live Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
