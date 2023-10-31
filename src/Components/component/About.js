import React from "react";
import introductionImg from "../assets/images/introductionImg.png";

export const About = () => {
  return (
    <div className="row vh-100 border border-danger">
      <div className="row my-auto ">
        <div className="row  justify-content-center">
          <div className="col-5 text-center">
            <div className="row">
              <p className="display-1">Abhishek Shah</p>
              <p className="my-2">
                Welcome to my portfolio! Explore my diverse work in showcasing
                creativity, innovation, and expertise. I'm dedicated to
                delivering exceptional results and excited to collaborate on
                your next project. Let's connect and create together!
              </p>
              <button className="btn btn-primary col-3 mx-auto my-5">
                Resume
              </button>
            </div>
          </div>
          <img
            className="col-4 my-auto"
            alt="about"
            src={introductionImg}
            style={{ height: "300px", width: "400px" }}
          />
        </div>
        <div className="row justify-content-center text-center my-4">
          <div className="col h6 font-gray">
            A Developer
            <br />
            <a href="" target="_blank" className="pointer nostyle">
              @shahiscoding
            </a>
          </div>
          <div className="col h6 font-gray">
            A Student
            <br />
            <a href="" target="_blank" className="pointer nostyle">
              @shahiscoding
            </a>
          </div>
          <div className="col h6 font-gray">
            A Photographer
            <br />
            <a href="" target="_blank" className="pointer nostyle">
              @shahiscoding
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
