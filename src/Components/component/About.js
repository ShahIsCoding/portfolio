import React from "react";
import { profile } from "../Constant/data";

export const About = () => {
    return (
        <div className="d-flex flex-column bg-gray-secondary my-auto p-1">
            <span className="ubuntu text-green">Hi</span>
            <span className="h1 ubuntu">I'm {profile.fn + " " + profile.ln}</span>
            <span className="h4 ubuntu">{profile.job_description}</span>
            <span className="h6 text-secondary ubuntu">{profile.words50}</span>
        </div>
    )
}