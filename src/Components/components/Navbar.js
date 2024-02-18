import { DownloadOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
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
    <div className="text-gray-600 bg-slate-50 cursor-pointer z-10 dark:bg-black py-1">
      <div className="mx-5 my-4">
        <div className="mx-auto flex flex-row justify-between">
          <div className="logo text-left">
            <TfiMenuAlt
              className="md:hidden block"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            />
            <h6 className="lg:text-2xl text-nowrap hidden md:block bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient ">
              Abhishek Shah
            </h6>
          </div>
          <div className={`pages md:block hidden `}>
            <ul className="grid grid-cols-5 gap-4">
              {menu.map((item, idx) => (
                <li className="text-gray-400 hover:text-black hover:underline underline-offset-4 dark:hover:text-white">
                  <a href={item.id}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-row gap-4 items-center">
              <li
                className="hover:underline"
                onClick={() => {
                  window.open(
                    "https://drive.google.com/drive/folders/1r62RZgrlHWYppnE5VJ79m4E6VWzDmfkr?usp=sharing",
                    "_blank"
                  );
                }}
              >
                <button className="dark:text-gray-400 text-black hover:text-white">
                  Resume
                  <DownloadOutlined className="dark:text-gray-400 text-black hover:text-white" />
                </button>
              </li>
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
        <ul className="md:hidden w-full px-4 border-b rounded ">
          {menu.map((item, idx) => (
            <li className="text-gray-400 py-2 m-2 hover:text-black dark:hover:text-white hover:underline underline-offset-4">
              <a href={item.id}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
