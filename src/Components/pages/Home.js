import React from "react";
import profile from "../assets/profile.png";
const Home = () => {
  return (
    <div className="border flex items-center justify-center h-screen">
      <div className="grid grid-cols-2 grid-rows-1 items-center ">
        <div className="text-4xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient">
          Hi 👋,
          <br /> My name is Abhishek Shah
          <br /> I build things for web
        </div>
        <div className="image flex justify-center">
          <img src={profile} alt="profilePic" width="300px" />
        </div>
      </div>
    </div>
  );
};

export default Home;
