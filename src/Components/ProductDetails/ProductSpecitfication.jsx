import React, { useState } from "react";
import Reviews from "./Reviews";

const ProductSpecitfication = () => {
  const titles = [
    {
      name: "Description",
    },
    {
      name: "Reviews",
    },
  ];
  
  const [activeTab, setActiveTab] = useState("Description");
  const [isActiveTitle, setIsActiveTitle] = useState("Description");
  const handleClick = (title) => {
    setActiveTab(title);
    setIsActiveTitle(title);
  };
  return (
    <div>
      <div className="w-[100%] pt-4 pb-4">
        {/* title  */}
        <div className="pb-2 border-b border-gray-200 flex items-center justify-center gap-4  font-bold text-md text-gray-700">
          {titles.map((items) => (
            <p
              onClick={() => handleClick(items.name)}
              className={`cursor-pointer ${
                activeTab === items.name ? "active" : ""
              } pt-2 pb-2 pr-4 pl-4 rounded-3xl`}
            >
              {items.name === "Reviews" ? items.name + " (0) " : items.name}
            </p>
          ))}
        </div>
        {/* {details } */}
        {isActiveTitle === "Description" && (
          <div className="p-3 text-xs font-semibold">
            <p className="text-gray-400 font-medium text-xs">
              Unprecedented power. The next generation of processing technology
              has arrived. Built into the newest VAIO notebooks lies Intel's
              latest, most powerful innovation yet: Intel® Centrino® 2 processor
              technology. Boasting incredible speed, expanded wireless
              connectivity, enhanced multimedia support and greater energy
              efficiency, all the high-performance essentials are seamlessly
              combined into a single chip.
            </p>
          </div>
        )}
        {isActiveTitle === "Reviews" && <Reviews />}
      </div>
    </div>
  );
};

export default ProductSpecitfication;
