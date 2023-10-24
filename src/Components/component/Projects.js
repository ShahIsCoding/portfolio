import React, { useState } from "react";
import { projectData } from "../Constant/data";
import { StackCard } from "./StackCard";
import { Drawer } from "@mui/material";
export const Projects = () => {
  const [drawerData, setDrawerData] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const projectDrawer = () => {
    return <Drawer></Drawer>;
  };
  const projectCard = () => {
    return (
      <div className="d-flex" style={{ overflow: "auto" }}>
        {projectData.map((i, idx) => {
          return (
            <div
              className="bg-gray-secondary rounded m-2 col-6 pointer"
              onClick={() => {
                setDrawerOpen(true);
                setDrawerData(i);
              }}
            >
              <img
                style={{
                  objectFit: "cover",
                  aspectRatio: "16/9",
                }}
                className="col-12 h-50"
                src={i.src}
                alt={i.title}
              />
              <span className="col-12 h3 m-2">{i.title}</span>
              <p className="text-green-secondary d-flex flex-wrap m-2">
                {i.describe.map((j, idx) => {
                  return <StackCard stack={j} md />;
                })}
              </p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <>
      {drawerOpen && projectDrawer}
      {projectCard()}
    </>
  );
};
