import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import '../../Pages/Home/Home.css'
import SpecialCard from "./SpecialCard";
const Special = () => {
  return (
    <div className="mb-10 w-100 mt-10 prl-100">
      <div className="bg-white border-b pb-2 border-gray-300 w-[100%] ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-xl">Special</h1>
          </div>
          <div className="flex justify-end gap-5 items-center">
            <p className="flex justify-around gap-2 items-center">
              <span className="icon p-1 border rounded-full">
                <GrFormPrevious />
              </span>
              <span className="p-1 border rounded-full icon">
                <GrFormNext />
              </span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <SpecialCard/>
    </div>
  );
};

export default Special;
