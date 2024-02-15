import React from "react";

const Stack = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center rounded dark:bg-slate-50 py-2">
      <div className="w-20 h-20">
        <img className="mx-auto" src={src} alt={name} />
      </div>
      <h1 className="text-center dark:text-black">{name}</h1>
    </div>
  );
};

export default Stack;
