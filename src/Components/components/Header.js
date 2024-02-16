import React from "react";

const Header = ({ title, subt }) => {
  return (
    <div className="border-b mb-5">
      <h1 className="text-4xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.400),theme(colors.green.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.400))] bg-[length:200%_auto] animate-gradient">
        {title}
      </h1>
      <h1 className="text-sm pt-5 dark:text-white">{subt}</h1>
    </div>
  );
};

export default Header;
