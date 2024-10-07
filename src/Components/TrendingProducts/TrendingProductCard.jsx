import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { MdOutlineLoop } from "react-icons/md";

const TrendingProductCard = ({ title, imageUrl, price }) => {
  return (
    <div className="border cartsProduct border-thin w-[90%] p-2 cursor-pointer">
      <div className="w-100 flex items-center justify-center border-b border-gray-300 flex-col">
        <img className="w-[90%]" src={imageUrl} alt="" />
        <div className="flex h-10 icones">   
          <div className="flex hovereff items-center justify-between">
            <FaShoppingCart className="icon " />
            <FaHeart className="icon " />
            <MdOutlineLoop className="icon " />
            <IoMdEye className="icon " />
          </div>
        </div>
      </div>
      <div className="mt-0.5 flex flex-col items-center justify-end gap-1 border-t border-gray-300 p-2">
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-sm font-semibold ">${price}.00</p>
      </div>
    </div>
  );
};

export default TrendingProductCard;
