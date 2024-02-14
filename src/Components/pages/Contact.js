import React from "react";

const Contact = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center dark:bg-black dark:text-white">
      <div>
        <h1 className="lg:text-4xl md:text-xl text-md">
          For any questions please mail:
        </h1>
        <a
          className="lg:text-4xl md:text-xl text-md font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient"
          href="mailto:workabhishekshah2023@gmail.com"
        >
          workabhishekshah2023@gmail.com
        </a>
      </div>
      {/* <div className="border p-2">
        <img src = {
      </div> */}
    </div>
  );
};

export default Contact;
