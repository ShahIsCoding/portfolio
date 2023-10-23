import React from "react";
import { AiFillGithub, AiOutlineDesktop } from "react-icons/ai";
import { projectData } from "../Constant/data";
export const Projects = () => {
  return (
    <div>
      {projectData.map((i, idx) => {
        return (
          <div className="bg-gray-secondary rounded px-1 py-2 my-2 row">
            <img
              style={{
                objectFit: "cover",
                aspectRatio: "16/9",
              }}
              className="col-12"
              src={i.src}
              alt={i.title}
            />
            <div className="row justify-content-between text-green">
              <span className="col-6">{i.title}</span>
              <span className="col-3 float-end">
                <AiFillGithub
                  className="mx-2"
                  onClick={() => window.open(i.github, "_blank")}
                />
                <AiOutlineDesktop
                  onClick={() => window.open(i.livelink, "_blank")}
                />
              </span>
            </div>
            <p className="px-2 h6 text-green-secondary">{i.describe}</p>
          </div>
        );
      })}
    </div>
  );
};
