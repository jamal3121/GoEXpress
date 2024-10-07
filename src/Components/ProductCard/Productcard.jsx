import React, { useEffect, useRef, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import ProductCardSlider from "./ProductCardSlider";
import "./ProductCard.css";

const Productcard = () => {
  const [l, setL] = useState(0);
  const [movePer, setMovePer] = useState(25.34);
  const [maxMove, setMaxMove] = useState(203);

  const updateDimensions = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setMovePer(50.36);
      setMaxMove(504);
    } else {
      setMovePer(25.34);
      setMaxMove(203);
    }
  };

  const rightMover = () => {
    setL((prevL) => Math.min(prevL + movePer, maxMove));
  };

  const leftMover = () => {
    setL((prevL) => Math.max(prevL - movePer, 0));
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div className="prl-100">
      <div className="w-full  overflow-x-hidden">
        <div className="flex justify-between items-center bg-white border-gray-300 border-b ">
          <h1 className="pb-2 text-xl font-semibold outline-black">
            Hot Categories
          </h1>
          <p className="flex gap-2 items-center">
            <span
              className="border font-xs hover:bg-yellow-400 opacity-80 p-1 border-thin rounded-full"
              onClick={leftMover}
            >
              <GrFormPrevious />
            </span>
            <span
              className="border font-xs opacity-80 hover:bg-yellow-400 p-1 border-thin rounded-full"
              onClick={rightMover}
            >
              <GrFormNext />
            </span>
          </p>
        </div>
        <div className="mt-4 bg-white">
          <ProductCardSlider l={l} />
        </div>
      </div>
    </div>
  );
};

export default Productcard;
