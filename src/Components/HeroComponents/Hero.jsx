import React from "react";
import Silder from "./Silder";

const Hero = () => {
  return (
    <div className="w-100 flex justify-between prl-100 gap-12 mb-14  ">
      {/* carousel  */}
      <div className="w-[75%]">
        <Silder />
      </div>
      {/* side Banners  */}
      <div className="w-[25%] flex flex-col h-[400px] gap-5 items-center justify-between overflow-hidden p1-4 pr-3">
        <div
          className="banner-img flex flex-col relative overflow-hidden "
          style={{
            backgroundImage:
              "url(https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/catalog/demo/banners/rightbanner-01.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            transition: 'transform  2s ease-in', // T
          }}
        >
          <div className="pt-16 pl-4">
            <p className="text-yellow-400 font-bold">Clean Photo</p>
            <h2 className="text-white font-bold text-xl">HD Cameras</h2>
          </div>
        </div>
        <div
          className="banner-img overflow-hidden"
          style={{
            backgroundImage:
              "url(https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/catalog/demo/banners/rightbanner-02.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            transition: 'transform  2s ease-in', // T
          }}
        >
          <div className="flex items-center flex-col justify-end gap-2 pt-10 pl-20 overflow-hidden">
            <p className="text-white font-bold text-sm">Smarts Tech</p>
            <button className="bg-white banner-btn"><a className="" href="#">go, shop</a></button>
          </div>
        </div>
        <div
          className="banner-img"
          style={{
            backgroundImage:
              "url(https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/catalog/demo/banners/rightbanner-03.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            transition: 'transform  2s ease-in', // T
          }}
        >
          <div className="text-white text-md font-semibold pt-4 pl-4">
            <p>Music Phones</p>
            <i className="text-xs font-thin text-yellow-400">Next Generation</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
