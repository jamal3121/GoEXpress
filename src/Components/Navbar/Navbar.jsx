import React, { useState } from "react";
import "./Navbar.css";
import Header from "./Header";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { MdWifiCalling1 } from "react-icons/md";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { category, homeMenu } from "./NavData";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);

  const navigate = useNavigate();
  const toggleHomeMenu = () => {
    setIsHomeMenuOpen(!isHomeMenuOpen);
  };

  const toggleCategory = () => {
    setIsCategoryOpen(prev => !prev);
  };

  return (
    <div className="w-100">
      <Header className="border-b border-gray-500 nav-bg" />
    {/* logo  */}
      <div className="w-100 nav-bg prl-100 pt-5 pb-5 flex items-center justify-between z-20">
        <img
          className="w-40"
          onClick={()=>navigate('/')}
          src="https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/catalog/logo.png"
          alt="Logo"
        />
  {/* search box */}
        <div className="bg-white search text-xs font-normal text-gray-400 ml-20">
          <div className="flex items-center justify-between w-100 gap-2">
            <div className="flex cat items-center justify-between relative">
              <div className="flex items-center gap-3" >
                <p>Categories</p>
                <IoIosArrowDown />
              </div>
            </div>
            <input
              className="search-input outline-none"
              type="text"
              placeholder="Search"
            />
            <button className="search-btn text-center">Search</button>
          </div>
        </div>

        <div className="flex items-center support border-r border-r-slate-600 gap-2 pr-10 cursor-pointer">
          <MdWifiCalling1 className="text-2xl call" />
          <div className="flex flex-col text-xs font-medium opa city-75">
            <p>Call Center</p>
            <p>088-888-8888</p>
          </div>
        </div>

        <div onClick={()=>navigate('/cart')} className="flex items-center justify-start cart pr-16 gap-2 text-xs text-black-600 cursor-pointer">
          <p>Cart</p>
          <HiShoppingCart className="text-lg cart-icon" />
        </div>
      </div>
{/* botton nav  */}
      <div className="w-100 prl-100 pt-2 pb-5 cursor-pointer">
        <div className="flex items-center justify-start gap-10 text-xs font-medium">
          <div>
            <div className="relative flex items-center gap-3 text-sm font-semibold bg-black p-2.5 pl-4 pr-4 rounded-3xl">
              <div className="flex items-center gap-3" onClick={toggleCategory}>
                <span className="text-white cursor-pointer">Shop Categories</span>
                <FaBars className="text-white cursor-pointer" />
              </div>

              {isCategoryOpen && (
                <ul className="absolute top-10 left-0 flex flex-col z-50 w-[160px] bg-white rounded-md cursor-pointer border border-gray-200 max-h-60 overflow-y-scroll">
                  {category.map((item) => (
                    <li key={item.id} className="relative w-full  text-xs font-medium hover:opacity-50 border-b pt-1.5 pb-1.5 pl-2 pr-2 border-b-slate-300 ">
                      <a href="#" className="flex items-center justify-between">
                        <p className="flex items-center gap-1" onClick={item.title === "Home" ? toggleHomeMenu : undefined}>
                          {item.leftIcon} <span>{item.title}</span>
                        </p>
                        <p className="text-end">{item.rightIcon}</p>
                      </a>
                      {item.title === "Home" && isHomeMenuOpen && (
                        <div className="absolute top-0 left-20 w-[200px] ml-4">
                          {homeMenu.map((subItem) => (
                            <div key={subItem.id} className="flex items-center">
                              <p>{subItem.title}</p>
                              <img src={subItem.imageUrl} alt={subItem.title} className="ml-2" />
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <p className="btm-menu">
            <a href="#" className="flex items-center gap-3 font-bold">
              <span>Best in offer</span>
              <FaArrowRight className="bg-yellow-300 text-lg rounded-full p-1" />
            </a>
          </p>
          {/* Other Links */}
          {['Home', 'Brand', 'Gift Certificates', 'Affiliate', 'Contact us'].map(link => (
            <p className="btm-menu" key={link}>
              <a href="#">{link}</a>
            </p>
          ))}
          <p className="btm-menu">
            <a href="#" className="flex items-center gap-3">
              <span>More</span>
              <IoIosArrowForward />
            </a>
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
