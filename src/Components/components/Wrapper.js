import React from "react";

const Wrapper = ({ addedClass, childClass, children }) => {
  return (
    <div
      className={
        "h-screen md:px-24 p-5  border border-gray-800 bg-black text-white " +
        addedClass
      }
    >
      <div className={"h-4/5 " + childClass}>{children}</div>
    </div>
  );
};

export default Wrapper;
