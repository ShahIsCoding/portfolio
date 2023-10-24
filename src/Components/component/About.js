import React from "react";
import { profile } from "../Constant/data";

export const About = () => {
  return (
    <div className="row bg-gray-secondary h-25 rounded px-2 my-1">
      <p className="ubuntu">Hi</p>
      <p className="h1 ubuntu text-green">I'm {profile.fn + " " + profile.ln}</p>
      <p className="h4 ubuntu">{profile.job_description}</p>
      <p className="h6 text-secondary ubuntu">{profile.words50}</p>
    </div>
  );
};
