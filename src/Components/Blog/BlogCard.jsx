import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import "./Blog.css";

const BlogCard = ({ imageUrl, title, description }) => {
  return (
    <div className="card card2 mr-10">
      <div className="p-2 relative border border-thin border-gray-300 rounded-sm">
        <div className="relative overflow-hidden hovereff">
          <img className="img w-[100%] h-[100%]" src={imageUrl} alt="" />
          <div className="absolute top-[105%] left-[45%] w-fit border search border-white rounded-full p-2">
            <HiMiniMagnifyingGlass className="text-xl text-white font-semibold" />
          </div>
        </div>
        <div className="absolute top-[56%] left-[5%] rounded-full h-12 text-xs circlething font-bold text-gray-500 w-12 flex justify-center items-center flex-col bg-white z-10">
          <p>25</p>
          <p>Nov</p>
        </div>
        <div className="pt-6 pl-2">
          <p className="text-sm font-semibold text-gray-700">{title}</p>
          <p className="pt-4 text-xs text-gray-400 space-x-1">{description}</p>
          <p className="pt-2 text-xs font-bold">Read More &nbsp; &gt;</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
