import React from "react";

const Shimmer = () => {
  return (
    <div className="w-[70%] mx-auto">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="h-70 bg-gray-100 rounded-lg shadow-md my-4 "
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
