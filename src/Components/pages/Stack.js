import React from "react";

const Stack = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded dark:bg-slate-50 py-2 hover:shadow-sm hover:shadow-gray-50">
      <div className="w-10 h-10">
        <img className="mx-auto" src={src} alt={name} />
      </div>
      <h1 className="text-center dark:text-black">{name}</h1>
    </div>
  );
};

export default Stack;
