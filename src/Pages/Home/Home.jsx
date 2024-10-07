import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/HeroComponents/Hero";
import Productcard from "../../Components/ProductCard/Productcard";
import TrendingProduct from "../../Components/TrendingProducts/TrendingProduct";
import "./Home.css";
import Special from "../../Components/Special/Special";
import { services } from "../../data/services";
import TopCategories from "../../Components/TopCategories/TopCategories";
import Blog from "../../Components/Blog/Blog";
import LogoCarousel from "../../Components/LogoCarousel/LogoCarousel";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <Productcard />
      <TrendingProduct />
      {/* banner */}
      <div className="container mt-10 mb-10 prl-100 w-100 flex gap-8 justify-between">
        <div className="image w-[50%] h-[180px] overflow-hidden relative">
          <div className=" cursor-pointer w-[100%] h-[100%] banner-1 text-white absolute flex flex-col items-start  pt-8 pl-6 gap-2">
            <p className="text-yellow-300 text-md">New In Mega Offer</p>
            <h1 className="text-xl font-extrabold text-white">Go, Mega Shop</h1>
            <button className="bg-yellow-400 pt-1 pb-1 pl-2 pr-2 rounded-3xl text-black">
              Shop Now
            </button>
          </div>
        </div>
        <div className="image w-[100%] h-[180px] overflow-hidden">
          <div className="cursor-pointer w-[100%] h-[100%] banner-2 flex flex-col items-center  pt-8 pr-[260px] gap-2">
            <p className="text-2xl font-bold">Samsung Home!</p>
            <p className="bg-black pt-1 pb-1 pl-3 pr-3 text-white text-xs">
              Explore Seasonal SALE Only On New Galaxy
            </p>
            <p className="text-sm text-gray-800">Mega Deals</p>
          </div>
        </div>
      </div>
      {/* special  */}
      <Special />
      {/* services  */}
      <div className="prl-100">
        <div className="border-b border-t border-double border-slate-300  border-spacing-1 p-0.5">
          <div className="border-b border-t border-double border-slate-300 p-5 flex justify-between items-center">
            {services.map((item) => (
              <div className="flex items-center gap-3 p-4 ">
                <p className="text-3xl">{item.icon}</p>
                <div className="text-start">
                  <h2 className="text-md font-bold">{item.title}</h2>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* banner. */}
      <div className="w-100 prl-100">
        <div className="relative banpar h-[200px] w-[100%] overflow-hidden">
          <div className="h-[100%] banner-3 w-[100%] bg-slate-300"></div>
          <div className="absolute top-14 w-[100%] flex flex-col items-center justify-center">
            <p className="text-2xl font-semibold text-yellow-400 ">
              Smart Homes
            </p>
            <p className="text-md font-bold text-white mt-2 mb-2 ">
              Next Generation Devices
            </p>
            <p className="bg-yellow-400 pt-1 pb-1 pl-4 pr-4 text-black font-semibold text-sm">
              Shop Now & Get 30% Off On This Festival Season
            </p>
          </div>
        </div>
      </div>
      {/* top categories  */}
      <TopCategories />
      {/* blog  */}
      <Blog />
      {/* logo carousel  */}
      <LogoCarousel />
      <Footer />
    </div>
  );
};

export default Home;
