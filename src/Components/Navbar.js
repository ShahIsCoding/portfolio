import React, { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";

const menu = [
  { name: "Home", id: "#home" },
  { name: "About", id: "#aboutme" },
  { name: "TechStack", id: "#techStack" },
  { name: "Projects", id: "#project" },
  { name: "Contact", id: "#contact" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-gray-600 bg-slate-50 cursor-pointer z-10 dark:bg-black">
      <div className="w-full flex justify-center">
        <div className="w-4/5 h-16  mx-auto p-3 flex flex-row justify-between items-center">
          <div className="logo">
            <TfiMenuAlt
              className="md:hidden block"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
            <span className="md:text-4xl hidden md:block bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient pl-16">
              Abhishek Shah
            </span>
          </div>
          <div className={`pages md:block hidden `}>
            <ul className="flex flex-row lg:gap-16 gap-4">
              {menu.map((item, idx) => (
                <li className="text-gray-400 hover:text-black hover:underline underline-offset-4 dark:hover:text-white">
                  <a href={item.id}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="links">
            <ul className="flex flex-row gap-4">
              <li className="text-gray-400 text-xl cursor-pointer hover:text-black dark:hover:text-white">
                <FaGithub
                  className=""
                  onClick={() =>
                    window.open("https://github.com/ShahIsCoding", "blank")
                  }
                />
              </li>
              <li className="text-gray-400 text-xl  hover:text-teal-800 dark:hover:text-white">
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
          {menu.map((item, idx) => (
            <li className="text-gray-400 px-3 py-2 m-2  hover:text-black hover:underline underline-offset-4">
              <a href={item.id}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
