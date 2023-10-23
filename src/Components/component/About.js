import React from "react";
import { profile } from "../Constant/data";

export const About = () => {
    return (
        <>
            <span className="ubuntu">Hi</span>
            <span className="h1 ubuntu">I'm {profile.fn + " " + profile.ln}</span>
            <span className="h4 ubuntu">{profile.job_description}</span>
            <span className="h6 text-secondary ubuntu">{profile.words50}</span>
        </>
    )
}