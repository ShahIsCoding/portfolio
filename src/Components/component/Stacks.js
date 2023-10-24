import React from "react";
import { StackCard } from "./StackCard";
import { StacksData } from "../Constant/data";

export const Stacks = () => {
  return (
    <div className="row">
      {StacksData.map((i, idx) => {
        return (
          <div className="bg-gray-secondary rounded px-3 py-2 mx-1 col col-md flex1">
            <h6>{i.title}</h6>
            <div className="d-flex flex-wrap px-2 ">
              {i.stacks.map((j, jdx) => {
                return <StackCard stack={j} xs/>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
