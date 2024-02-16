import React from "react";
import company from "../assets/company.png";
import location from "../assets/location.png";
import date from "../assets/date.png";

const JobCards = ({ companyName, position, type, locate, time }) => {
  return (
    <div className="w-full flex flex-col p-2 border-b mt-2">
      <div className="flex justify-between">
        <h1 className="lg:text-4xl text-lg">{position}</h1>
        <div className="rounded-xl md:text-sm text-[8px] bg-green-300 text-green-900 font-bold py-1 md:px-7 px-2 my-auto">
          {type}
        </div>
      </div>

      <div className="grid grid-cols-3 mb-5 mt-1">
        <div className="flex flex-row items-center">
          <div className="w-4 mr-2">
            <img src={company} />
          </div>
          <h4 className=" md:text-xl text-xs">{companyName}</h4>
        </div>
        <div className="flex flex-row items-center  ">
          <div>
            <img src={location} />
          </div>
          <h4 className=" md:text-base text-xs">{locate}</h4>
        </div>
        <div className="flex flex-row justify-end items-center">
          <div className="mr-5 hidden md:block">
            <img src={date} />
          </div>
          <h4 className="md:text-lg text-[10px] text-nowrap">{time}</h4>
        </div>
      </div>
    </div>
  );
};

export default JobCards;
