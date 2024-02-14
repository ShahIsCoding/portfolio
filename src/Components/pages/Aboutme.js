import React from "react";
import JobCards from "./JobCards";

const Aboutme = () => {
  const workExperience = [
    {
      companyName: "Cognome",
      position: "Software Engineer [SWE 1]",
      type: "Full-time",
      locate: "Remote",
      time: "current (8 months)",
    },
    {
      companyName: "Katonic.ai",
      position: "MERN Stack Engineer",
      type: "Internship",
      locate: "Remote",
      time: "3 months",
    },
  ];
  return (
    <div className="h-screen md:px-24  p-5 flex flex-col justify-center border dark:border-gray-800 dark:bg-black dark:text-white">
      <div className="h-2/4  flex flex-col justify-between">
        <div className="border-b">
          <h1 className="text-4xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient ">
            About Me
          </h1>
          <h1 className="text-sm pt-5">Get to know me a little better</h1>
        </div>
        <div className="lg:w-3/4 w-full ">
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
      </div>
    </div>
  );
};

export default Aboutme;
