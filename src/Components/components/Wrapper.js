import React from "react";

const Wrapper = ({ addedClass, children }) => {
  return (
    <div
      className={
        "h-screen md:px-24 p-5  border dark:border-gray-800 dark:bg-black dark:text-white" +
        addedClass
      }
    >
      <div className="h-4/5">{children}</div>
    </div>
  );
};

export default Wrapper;
