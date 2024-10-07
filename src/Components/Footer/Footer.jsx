import React from "react";
import { IoMdMail } from "react-icons/io";
import { MdCardGiftcard } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";
import { paymentCards } from "../../data/FooterData";
import '../Utility.css'

const Footer = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center bg-yellow-400 pt-6 pb-6  justify-center gap-10">
        <div className="flex items-center font-semibold text-2xl">
          <MdCardGiftcard className="mr-4 text-4xl" />
          <p>
            Save up to <span className="text-3xl font-bold">45% off</span> on
            first order..!
          </p>
        </div>
        <button className="pt-3 pb-3 pl-5 pr-5 bg-black text-white rounded-3xl text-sm hover:bg-white hover:text-black">
          Shop now
        </button>
      </div>
      <div className="flex w-[100%] justify-between items-center prl-100  footer-bg">
        {/* mail  */}
        <div className=" w-[130%] flex flex-col items-center gap-4 text-white font-semibold">
          <p className="flex items-center w-[300px]">
            <IoMdMail className="text-2xl" /> <span className="ml-2">Sign up for Newsletter</span>
          </p>
          <p className="text-sm text-gray-400 w-[300px] text-justify">Sign up with us, Get latest deals, offers & updates.</p>
          <p className="flex mt-4  items-center justify-between w-[300px] h-[50px] rounded-lg p-1 bg-white">
            <input
            className=" border-0 outline-0 pl-3 w-[70%] "
              type="email"
              name=""
              placeholder="Your email address"
              id=""
            />
            <TbLocationFilled className=" w-[30%] bg-black pt-2 h-full pb-2 pl-3 pr-3 text-3xl rounded-lg text-white" />
          </p>
        </div>
        {/* payment  */}
        <div className=" w-[70%] h-[100%] flex flex-col items-center justify-start gap-5">
          <p className="text-white font-bold  text-lg p">Safe Payment</p>
          <div className="grid grid-cols-3 gap-10" >
            {paymentCards.map((cards) => (
              <div>
                <img className="w-[50px]" src={cards.url} alt="" />
              </div>
            ))}
          </div>
        </div>
        {/* Download  */}
        <div className=" w-[100%] h-[100%]">
          <p className=" text-center text-white w-[100%] font-bold text-lg mb-5">Download App</p>
          <div className="flex items-center justify-center flex-col gap-3">
            <img src="https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/catalog/demo/banners/appstore.png" alt="" />
            <img src="https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/catalog/demo/banners/googleplay.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
