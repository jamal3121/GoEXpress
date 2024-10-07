import React, { useRef } from "react";
import "../../Components/Navbar/Navbar.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import { BlogData } from "../../data/BlogData";
import BlogCard from "./BlogCard";

const Blog = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3, 
    slidesToScroll: 2, // Scroll two cards at a time
    rows: 1, // one rows
  };
  return (
    <div className="mt-5 prl-100">
      <div className="flex items-center justify-between border-thin border-b">
        {/* title header section  */}
        <div className="border-b border-black">
          <p className="text-lg font-bold">Latest Blog</p>
        </div>
        <div>
          {/* titles  */}
          <div className="flex justify-end gap-5 items-center">
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
        <Slider
          ref={sliderRef}
          {...settings}
          className="w-[100%] p-4 "
        >
          {BlogData.map((items)=>(
            <BlogCard title={items.title} imageUrl={items.imageUrl} description={items.description} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
