import React from "react";
import ProductDetailsSideBar from "../ProductDetails/ProductDetailsSideBar";
import useFetchData from "../../Hooks/useFetchData";
import CartItems from "./CartItems";

const CartDetails = () => {
  const { data, loading, error } = useFetchData('https://66c432c4b026f3cc6cee532c.mockapi.io/demo');
  return (
    <div className="w-[100%] flex items-start justify-between gap-10 ">
      <div className="w-[18%]">
        <ProductDetailsSideBar />
      </div>
      {data.length < 1 && (
        <div className=" relative cart-empty w-[80%]">
          <img
            src="https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/catalog/view/theme/OPC050_05/stylesheet/TemplateTrip/images/request-not-found.png"
            alt=""
          />
          <div className="absolute top-10 left-10">
            <p className="text-sm text-gray-400 font-semibold mb-4">
              Your shopping cart is empty!
            </p>
            <button className="pt-2 pb-2 pl-4 pr-4 bg-black text-white font-semibold text-sm rounded-3xl hover:bg-yellow-400 hover:text-black ">
              Continue
            </button>
          </div>
        </div>
      )}
      {data.length >= 1 && (
        <div className="w-[80%]">
          <CartItems/>
        </div>
      )}
    </div>
  );
};

export default CartDetails;
