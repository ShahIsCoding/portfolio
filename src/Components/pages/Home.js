import React from "react";
import profile from "../assets/profile.png";
import Wrapper from "../components/Wrapper";
import { gradient } from "../constants/constanst";
const Home = () => {
  return (
    <Wrapper
      addedClass="flex items-center md:justify-center"
      childClass="flex flex-col justify-center  md:flex-row md:items-center"
    >
      <h1 className={"mx-auto mb-10 text-3xl pl-10" + gradient}>
        Hi 👋,
        <br /> My name is Abhishek Shah
        <br /> I build things for web
      </h1>
      <img
        src={profile}
        alt="profilePic"
        className="lg:w-2/6 md:w-2/4 w-1/2 mx-auto"
      />
    </Wrapper>
  );
};

export default Home;
