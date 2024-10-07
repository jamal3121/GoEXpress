import React, { useRef, useState } from "react";
import "./TopCategories.css";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoIosCart } from "react-icons/io";
import { RiLoopRightLine } from "react-icons/ri";
import { FaEye, FaHeart } from "react-icons/fa";
import { electronics, ipods, Tablets, title } from "../../data/TopCategoriesData";

const TopCategories = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3, // Two cards per row
    slidesToScroll: 2, // Scroll two cards at a time
    rows: 2, // Two rows
  };

  const [activeTab, setActiveTab] = useState("Electronics");

  const [isActiveProduct, setIsActiveProduct] = useState("Electronics");
  const handleClick = (title) => {
    setActiveTab(title);
    setIsActiveProduct(title)

  };

  return (
    <div className="mt-5 prl-100">
      <div className="flex items-center justify-between border-thin border-b">
        {/* title header section  */}
        <div className="border-b border-black">
          <p className="text-lg font-bold">Top Categories</p>
        </div>
        <div>
          {/* titles  */}
          <div className="flex justify-end gap-5 items-center">
            {title.map((title) => (
              <div key={title.name}>
                <p
                  className={`cursor-pointer pt-2 pb-2 pl-3 pr-3  rounded-3xl ${
                    activeTab === title.name ? "active" : ""
                  }`}
                  onClick={() => handleClick(title.name)}
                >
                  {title.name}
                </p>
              </div>
            ))}
            <p className="flex justify-around gap-2 items-center">
              <span
                onClick={() => sliderRef.current.slickPrev()}
                className="cursor-pointer icon p-1 border rounded-full"
              >
                <GrFormPrevious />
              </span>
              <span
                onClick={() => sliderRef.current.slickNext()}
                className=" cursor-pointer p-1 border rounded-full icon"
              >
                <GrFormNext />
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* cards sections  */}
      <div className="card-slider w-[100%] flex flex-wrap">
        {/* cards slider  */}
        <Slider ref={sliderRef} {...settings} className="w-[100%] p-4 mb-2">
          {/* Electronics  */}
          {isActiveProduct==='Electronics' && electronics.map((items, index) => (
            <div key={index} className="card w-[100%] h-[180px] m-2">
              <div className="border w-[90%] h-[100%] m-3 mb-2 border-thin flex gap-0.5 p-0.5">
                {/* image  */}
                <div className=" w-[60%] flex items-center justify-center border-r border-thin">
                  <img
                    className="w-[100px] border-thin border-gray-300"
                    src={items.imgUrl}
                    alt=""
                  />
                </div>
                {/* details  */}
                <div className="w-[100%] flex flex-col gap-1 border-l border-thin p-2">
                  <p className="text-sm text-gray-500 font-semibold">
                    {items.productName}
                  </p>
                  <p className="text-md text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <p className="text-md text-gray-700 font-bold">
                    ${items.price}
                  </p>
                  <div className="flex items-center gap-2">
                    <IoIosCart className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                    <FaHeart className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                    <RiLoopRightLine className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                    <FaEye className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Tablets  */}
          {isActiveProduct==='Tablets' && Tablets.map((items, index) => (
            <div key={index} className="card w-[100%] h-[180px] m-2">
              <div className="border w-[90%] h-[100%] m-3 mb-2 border-thin flex gap-0.5 p-0.5">
                {/* image  */}
                <div className=" w-[60%] flex items-center justify-center border-r border-thin">
                  <img
                    className="w-[100px] border-thin border-gray-300"
                    src={items.imgUrl}
                    alt=""
                  />
                </div>
                {/* details  */}
                <div className="w-[100%] flex flex-col gap-1 border-l border-thin p-2">
                  <p className="text-sm text-gray-500 font-semibold">
                    {items.productName}
                  </p>
                  <p className="text-md text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <p className="text-md text-gray-700 font-bold">
                    ${items.price}
                  </p>
                  <div className="flex items-center gap-2">
                    <IoIosCart className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                    <FaHeart className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                    <RiLoopRightLine className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                    <FaEye className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* ipods */}
          {isActiveProduct==='ipods' && ipods.map((items, index) => (
            <div key={index} className="card w-[100%] h-[180px] m-2">
              <div className="border w-[90%] h-[100%] m-3 mb-2 border-thin flex gap-0.5 p-0.5">
                {/* image  */}
                <div className=" w-[60%] flex items-center justify-center border-r border-thin">
                  <img
                    className="w-[100px] border-thin border-gray-300"
                    src={items.imgUrl}
                    alt=""
                  />
                </div>
                {/* details  */}
                <div className="w-[100%] flex flex-col gap-1 border-l border-thin p-2">
                  <p className="text-sm text-gray-500 font-semibold">
                    {items.productName}
                  </p>
                  <p className="text-md text-yellow-400">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                  <p className="text-md text-gray-700 font-bold">
                    ${items.price}
                  </p>
                  <div className="flex items-center gap-2">
                    <IoIosCart className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                    <FaHeart className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                    <RiLoopRightLine className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                    <FaEye className="font-bold text-2xl text-gray-200 bg-black rounded-3xl p-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopCategories;
