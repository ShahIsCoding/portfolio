import React from "react";
import JobCards from "../components/JobCards";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

const Aboutme = () => {
  const workExperience = [
    {
      companyName: "Cognome",
      position: "Software Engineer [SWE 1]",
      type: "Full-time",
      locate: "Remote",
      time: "current (9 m)",
    },
    {
      companyName: "CDC IIT ISM",
      position: "Full Stack Developer",
      type: "Internship",
      locate: "Dhanbad",
      time: "1yr",
    },
    {
      companyName: "Katonic.ai",
      position: "MERN Stack Engineer",
      type: "Internship",
      locate: "Remote",
      time: "3 m",
    },
  ];
  return (
    <Wrapper addedClass="">
      <Header title="About Me" subt="Get to know me a little better" />
      <div className="lg:grid lg:grid-cols-5">
        <div className="px-10 col-span-3">
          {workExperience.map(
            ({ companyName, position, type, locate, time }) => {
              return (
                <JobCards
                  companyName={companyName}
                  position={position}
                  type={type}
                  locate={locate}
                  time={time}
                />
              );
            }
          )}
        </div>
        {/* <div className="border h-full col-span-2"></div> */}
      </div>
    </Wrapper>
  );
};

export default Aboutme;
