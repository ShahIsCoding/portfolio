import React from "react";
import { StackCard } from "./StackCard";
import { StacksData } from "../Constant/data";

export const Stacks = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      {StacksData.map((i, idx) => {
        return <div className="bg-gray-secondary rounded px-3 py-2 my-2 ">
          <h6>{i.title}</h6>
          <div className="d-flex flex-wrap px-2 ">
            {i.stacks.map((j,jdx)=>{
                return <StackCard stack={j} />
            })}
          </div>
        </div>;
      })}
    </div>
  );
};
