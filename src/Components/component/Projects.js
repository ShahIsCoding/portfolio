import React, { Suspense } from "react";
import { AiFillGithub, AiOutlineDesktop } from "react-icons/ai";
import { projectData } from "../Constant/data";
import { StackCard } from "./StackCard";
export const Projects = () => {
  return (
    <div className=" row">
      {projectData.map((i, idx) => {
        return (
          <div className="bg-gray-secondary rounded m-2 col">
            <Suspense fallback={<div>wpoerif</div>}> 
              {React.lazy(() => {
                <img
                  style={{
                    objectFit: "cover",
                    aspectRatio: "16/9",
                  }}
                  className="col-12"
                  src={i.src}
                  alt={i.title}
                />;
              })}
            </Suspense>
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
            <p className="text-green-secondary">
              {i.describe.map((j, idx) => {
                return <StackCard stack={j} xs />;
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
};
