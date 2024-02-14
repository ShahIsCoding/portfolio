import React from "react";
import profile from "../assets/profile.png";
const Home = () => {
  return (
    <div className="border-b dark:border-gray-800 flex items-center justify-center h-screen px-24 dark:bg-black">
      <div className="md:grid md:grid-cols-2 md:grid-rows-1 items-center w-full">
        <div className="lg:text-4xl text-lg text-left font-semibold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient pl-16">
          Hi 👋,
          <br /> My name is Abhishek Shah
          <br /> I build things for webzzz
        </div>
        <div className="flex justify-center">
          <img src={profile} alt="profilePic" className=" w-1/2 " />
        </div>
      </div>
    </div>
  );
};

export default Home;
