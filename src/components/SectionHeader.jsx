import React from "react";

const SectionHeader = ({ children }) => {
  return (
    <div>
      <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-10 text-left">
        <span className="p-2 w-fit h-fit bg-[#e85676] mr-2"></span>{children}
      </h2>
    </div>
  );
};

export default SectionHeader;
