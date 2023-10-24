import React from "react";
export const StackCard = ({ stack, xs }) => {
  return (
    <p
      className={`d-inline rounded stackcard  my-1 ${xs ? "p-1" : "px-3 py-2"}`}
      style={{ fontSize: xs ? "10px" : "" }}
    >
      {stack}
    </p>
  );
};
