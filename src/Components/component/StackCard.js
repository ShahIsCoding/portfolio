import React from "react";
export const StackCard = ({logo, stack}) => {
  return (
    <div className="d-inline rounded stackcard px-3 py-2 my-1">
      <h6>{stack}</h6>
    </div>
  );
};
