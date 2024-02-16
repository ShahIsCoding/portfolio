import React from "react";
import profile from "../assets/profile.png";
import Wrapper from "../components/Wrapper";
const Home = () => {
  return (
    <Wrapper>
      <div className=" md:flex md:flex-row ">
        <h1 className="m-24 text-3xl  bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient">
          Hi 👋,
          <br /> My name is Abhishek Shah
          <br /> I build things for webzzz
        </h1>
      </div>
      <img src={profile} alt="profilePic" className="w-1/2 mx-auto" />
    </Wrapper>
  );
};

export default Home;
