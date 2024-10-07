import React from "react";
import { useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Slider from "react-slick";
import { logo } from "../../data/LogoCarouselData";
import '../Utility.css'
import './LogoCarousel.css'

const LogoCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5, // five cards per row
    slidesToScroll: 1, // Scroll two cards at a time
    rows: 1, // Two rows
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, 
  };
  return (
    <div className="prl-100">
      <div className="w-[100%] flex items-center justify-center p-3 logosection">
        <p className="border border-thin rounded-full p-1 logos">
          <span
            onClick={() => sliderRef.current.slickPrev()}
            className="cursor-pointer text-md font-bold "
          >
            <GrFormPrevious/>
          </span>
        </p>

        <Slider ref={sliderRef} {...settings} className="w-[100%] p-4 mb-2 ">
          {logo.map((logo) => (
            <div className="ml-2 opacity-65">
              <img src={logo.url} alt="" />
            </div>
          ))}
        </Slider>

        <p className="border border-thin rounded-full p-1 logos">
          <span
            onClick={() => sliderRef.current.slickNext()}
            className="cursor-pointer  text-md font-bold"
          >
            <GrFormNext />
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogoCarousel;
