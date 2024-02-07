import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

const menu = ["Home", "About", "TechStack", "Projects", "Contact"];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="text-gray-600 bg-slate-50 cursor-pointer z-10">
      <div className="w-full flex justify-center">
        <div className="w-4/5 h-16 bg-slate-50 mx-auto p-3 flex flex-row justify-between items-center">
          <div className="logo">
            <TfiMenuAlt
              className="md:hidden block"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
            <span className="hidden md:block ">Abhishek Shah</span>
          </div>
          <div className={`pages md:block hidden  `}>
            <ul className="flex flex-row lg:gap-16 gap-4">
              {menu.map((item, idx) => (
                <li className="text-gray-400 hover:text-black hover:underline underline-offset-4 ">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="links">
            <ul className="flex flex-row gap-4">
              <li className="text-gray-400 text-xl cursor-pointer hover:text-black">
                <FaGithub
                  className=""
                  onClick={() =>
                    window.open("https://github.com/ShahIsCoding", "blank")
                  }
                />
              </li>
              <li className="text-gray-400 text-xl  hover:text-teal-800">
                <FaLinkedinIn
                  className="text-xl "
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/abhishek-shah-993019199/",
                      "blank"
                    )
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden w-full">
          <li className="text-gray-400 px-3 py-2 m-2">Home</li>
          <li className="text-gray-400 px-3 py-2 m-2">About</li>
          <li className="text-gray-400 px-3 py-2 m-2">Tech Stack</li>
          <li className="text-gray-400 px-3 py-2 m-2">Projects</li>
          <li className="text-gray-400 px-3 py-2 m-2">Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
