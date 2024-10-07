import React, { useRef } from "react";
import Slider from "react-slick";
import { Tablets } from "../../data/TopCategoriesData";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const ProductDetailsSideBar = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 1, // Two cards per row
    slidesToScroll: 1, // Scroll two cards at a time
    rows: 2, // Two rows
  };
  return (
    <div className="w-[100%] flex flex-col gap-5">
      {/* category  */}
      <div className="border border-thin border-gray-200 rounded-md p-1 cursor-pointer">
        <p className="bg-gray-900 rounded-md font-bold text-white pt-1 pb-1 pl-4 pr-2">
          Categories
        </p>
        <ul className=" pt-1 pb-1 pl-4 pr-2 text-xs flex flex-col mt-2 font-semibold text-gray-500 cursor-pointer gap-1 ">
          <li className="hover:font-bold opacity-70 hover:opacity-100">Tablets</li>
          <li className="hover:font-bold opacity-70 hover:opacity-100">Electronics</li>
        </ul>
      </div>
      {/* banner  */}
      <div>
        <img
          src="https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/banners/left-banner-290x470.jpg"
          alt=""
        />
      </div>
      {/* slider */}
      <div className="border border-thin border-gray-200 p-1">
        <div className="bg-gray-900 flex items-center justify-between font-bold text-white pt-2 pb-2 pl-4 pr-2 w-[100%] rounded-md">
          <p className="">
            Featured
          </p>
          <p className="flex items-center">
            <span
              onClick={() => sliderRef.current.slickPrev()}
              className="cursor-pointer p-1  hover:text-yellow-400"
            >
              <GrFormPrevious />
            </span>
            <span
              onClick={() => sliderRef.current.slickNext()}
              className=" cursor-pointer p-1 hover:text-yellow-400"
            >
              <GrFormNext />
            </span>
          </p>
        </div>
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-[100%] pt-2 cursor-pointer flex items-center justify-center"
        >
          {Tablets.map((items) => (
            <div className="mb-3">
              <div className="w-[100%] h-[100%] flex flex-row items-center  justify-center">
                <div className="w-[50%] flex items-center justify-center">
                  <img src={items.imgUrl} className="w-[50%] " alt="" />
                </div>
                <div className="w-[50%] flex items-start justify-start overflow-hidden flex-col">
                  <p className="text-wrap text-gray-400 text-xs">
                    {items.productName}
                  </p>
                  <p className="font-semibold text-sm">${items.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* more details  */}
      <div className="border border-thin border-gray-200 rounded-md p-1">
        <p className="bg-gray-900 rounded-md font-bold text-white pt-1 pb-1 pl-4 pr-2">
        Information
        </p>
        <ul className=" pt-1 pb-1 pl-4 pr-2 text-xs flex flex-col mt-2 font-semibold text-gray-500 cursor-pointer gap-1 ">
          <li className="opacity-70 hover:opacity-100 hover:font-bold">About us</li>
          <li className="opacity-70 hover:opacity-100 hover:font-bold">Delivary Information</li>
          <li className="opacity-70 hover:opacity-100 hover:font-bold">Privacy Policy</li>
          <li className="opacity-70 hover:opacity-100 hover:font-bold">Terms & Conditions</li>
          <li className="opacity-70 hover:opacity-100 hover:font-bold">Contact us</li>
          <li className="opacity-70 hover:opacity-100 hover:font-bold">Site Map</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsSideBar;
