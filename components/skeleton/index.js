import React from "react";

function Skeleton({ width, height }) {
  return (
    <div
      className="flex relative overflow-hidden bg-gray-500 h-full w-full after:absolute after:top-0 after:bottom-0 after:right-10 after:left-10 after:translate-x-full animate-pulse "
      style={{ width, height }}
    ></div>
  );
}

export default Skeleton;
