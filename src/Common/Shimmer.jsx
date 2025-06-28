import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-2.5">
      {Array(10)
        .fill("")
        .map((element, i) => {
          return (
            <div
              className="w-[240px] h-[250px] bg-gray-300 rounded-2xl m-3"
              key={i}
            >
              {element}
            </div>
          );
        })}
    </div>
  );
};

export default Shimmer;
