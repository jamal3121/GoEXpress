import React, { useRef, useState } from "react";
import Slider from "react-slick/lib/slider";
import { electronics } from "../../data/TopCategoriesData";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import axios from "axios";
import "./ProductDetails.css";
import {
  MdModeComment,
  MdModeEdit,
  MdOutlineCompareArrows,
  MdShoppingCart,
} from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import ProductSpecitfication from "./ProductSpecitfication";
import PropTypes from "prop-types";

const ProductDescriptions = ({ imageUrl, title, price }) => {
  const sliderRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    rows: 1,
  };

  const handleAddToCart = async (title, imageUrl, price) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://66c432c4b026f3cc6cee532c.mockapi.io/demo",
        {
          quantity: quantity,
          productName: title,
          imageSrc: imageUrl,
          price: price,
        }
      );

      console.log("Product added to cart:", response.data);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mb-4">
      <div className="w-full flex justify-between items-start p-4 gap-3">
        <div className="w-2/5 flex flex-col items-center p-4">
          <div className="w-full flex items-center border border-gray-300 justify-center">
            <img src={imageUrl} alt={`Image of ${title}`} />
          </div>
          <div className="w-11/12 p-4 ml-[-30px] flex items-center">
            <span
              onClick={() => sliderRef.current.slickPrev()}
              className="cursor-pointer border rounded-full hover:border-gray-400 hover:text-yellow-500"
            >
              <GrFormPrevious />
            </span>
            <Slider ref={sliderRef} {...settings} className="w-full">
              {electronics.map((items, index) => (
                <div key={index} className="w-full h-36 mb-2">
                  <div className="flex mr-3 items-center justify-center border border-thin h-full border-gray-300 hover:border-gray-400">
                    <img
                      src={items.imgUrl}
                      className="w-3/4"
                      alt={`Image of ${items.productName}`}
                    />
                  </div>
                </div>
              ))}
            </Slider>
            <span
              onClick={() => sliderRef.current.slickNext()}
              className="cursor-pointer border rounded-full"
            >
              <GrFormNext />
            </span>
          </div>
        </div>
        <div className="w-3/5 p-4">
          <div className="border-b border-gray-200 pb-3 font-semibold text-md text-gray-800">
            <p>{title}</p>
          </div>
          <div className="flex flex-col items-start text-sm pt-4 pb-4 gap-2 border-b border-gray-200">
            <div className="flex flex-col items-start gap-1 text-xs font-semibold cursor-pointer">
              <p>
                <span className="w-24 font-normal">Brand :</span>
                <span className="pl-2">Sony</span>
              </p>
              <p>
                <span className="w-24 font-normal">Product Code :</span>
                <span className="pl-2">SonyA12</span>
              </p>
              <p>
                <span className="w-24 font-normal">Availability :</span>
                <span className="pl-2">In Stock</span>
              </p>
            </div>
            <div className="text-gray-600 flex items-center gap-2 cursor-pointer">
              <p className="text-yellow-400 text-lg">
                &#9734;&#9734;&#9734;&#9734;&#9734;
              </p>
              <p className="vl"></p>
              <p className="flex items-center gap-1">
                <MdModeComment /> 0 reviews
              </p>
              <p className="vl"></p>
              <p className="flex items-center gap-1">
                <MdModeEdit /> write a review
              </p>
            </div>
          </div>
          <div className="pt-4 pb-4 border-b border-gray-200 cursor-pointer">
            <p className="text-md font-bold">${price}.00</p>
            <p className="text-xs font-semibold text-gray-400 pt-1">
              Ex Tax: $1,000.00
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-4 pt-4 text-sm">
              <div className="flex gap-2 items-center font-light">
                <p>Qty</p>
                <input
                  className="outline-0 text-center w-12 border rounded-2xl p-1"
                  type="number"
                  value={quantity}
                  min={1}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </div>
              <button
                className={`flex gap-2 items-center bg-gray-800 pt-2 pb-2 pl-4 pr-4 rounded-3xl ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-yellow-400 hover:text-black"
                } text-white`}
                onClick={() => handleAddToCart(title, imageUrl, price)}
                disabled={loading}
              >
                <MdShoppingCart />
                <p>Add to Cart</p>
              </button>
            </div>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-sm font-light cursor-pointer opacity-80">
                <IoIosHeartEmpty /> Add to Wish List
              </p>
              <p className="flex items-center gap-2 text-sm font-light cursor-pointer opacity-80">
                <MdOutlineCompareArrows /> Add to compare
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* specifications */}
      <ProductSpecitfication />
      {/* suggestions  */}
      <div>suggestions</div>
    </div>
  );
};

export default ProductDescriptions;
