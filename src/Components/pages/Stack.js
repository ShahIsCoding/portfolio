import React from "react";

const Stack = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20">
        <img className="mx-auto" src={src} alt={name} />
      </div>
      <h1 className="text-center">{name}</h1>
    </div>
  );
};

export default Stack;
