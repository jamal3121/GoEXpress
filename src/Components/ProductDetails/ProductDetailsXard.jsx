import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  bestSeller,
  FeaturedProducts,
  LatestProduct,
} from "../TrendingProducts/TrendingProductData";
import "./ProductDetails.css";
import { MdHome } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import ProductDetailsSideBar from "./ProductDetailsSideBar";
import ProductDescriptions from "./ProductDescriptions";

const ProductDetailsXard = () => {
  const { id } = useParams();

  // Combine all products into a single array
  const allProducts = [...LatestProduct, ...FeaturedProducts, ...bestSeller];

  // Find the product by id
  const product = allProducts.find((item) => item.id === parseInt(id));
  const navigate = useNavigate()
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="w-[100%]">
        <div className="prl-100 w-[100%] title-bg ">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-800 space-x-1 cursor-pointer">{product.productName}</p>
            <p className="flex items-center justify-between gap-6 cursor-pointer">
              <span onClick={()=>{navigate('/')}} className="text-sm  ">
                <MdHome />
              </span>
              <span className="text-xs font-light">
              <IoIosArrowForward />
              </span>
              <span className="text-gray-500 font-semibold text-xs">{product.productName}</span>
            </p>
          </div>
        </div>
        {/* product details  */}
        <div className="w-[100%] prl-100 flex gap-4 items-start justify-between">
          <div className="w-[18%] ">
            <ProductDetailsSideBar/>
          </div>
          {/* product details  */}
          <div className="w-[80%]">
            <ProductDescriptions imageUrl={product.imageUrl} title={product.productName} price={product.price} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsXard;


