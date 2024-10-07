import React, { useState } from "react";
import "./Navbar.css";
import { MdLabelImportant, MdOutlinePersonOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoLockClosedOutline } from "react-icons/io5";
import { RxLoop } from "react-icons/rx";

import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  const myAccountSubList = [
    {
      icon: <IoLockClosedOutline />,
      title: "Login",
    },
    {
      icon: <MdOutlinePersonOutline />,
      title: "Register",
    },
    {
      icon: <RxLoop />,
      title: "Compare",
    },
    {
      icon: <FaRegHeart />,
      title: "Wish List",
    },
  ];
  const [myAccountOpen, setIsMyAccountOpen] = useState(false);
  const handleToggleMyAccount = () => {
    setIsMyAccountOpen(!myAccountOpen);
  };
  return (
    <div>
      <div className="flex border-b  nav-bg border-gray-400 justify-between items-center prl-100 pt-3 pb-3 text-xs font-medium text-black z-50">
        {/* left div  */}
        <div className="flex justify-start items-center">
          <MdLabelImportant />
          <p className="pl-2">World's Fastest Online Shopping Destination</p>
        </div>
        {/* right div  */}
        <div>
          <ul className="flex justify-end items-center gap-5">
            <li onClick={handleToggleMyAccount}>
              <p className="flex items-center cursor-pointer">
                <span className="pr-2">My Account</span> <IoIosArrowDown />
              </p>
              {myAccountOpen && (
                <ul className="absolute top-10 w-36 bg-white p-3 cursor-pointer border border-gray-200 z-50">
                  {myAccountSubList.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 mb-2 cursor-pointer hover:opacity-50 font-semibold"
                    >
                      <span>{item.icon}</span> <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li className="flex items-center cursor-pointer">
              <span className="pr-2">Language</span> <IoIosArrowDown />
            </li>
            <li className="flex items-center cursor-pointer">
              <span className="pr-2">$ Currency</span> <IoIosArrowDown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
