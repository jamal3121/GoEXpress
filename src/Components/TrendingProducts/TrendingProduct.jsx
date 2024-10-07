import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./TrendingProducts.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import TrendingProductCard from "./TrendingProductCard";
import {
  bestSeller,
  FeaturedProducts,
  LatestProduct,
} from "./TrendingProductData";

const TrendingProduct = () => {
  const title = [
    { name: "Latest" },
    { name: "Featured" },
    { name: "Best Seller" },
  ];

  const [isActiveProduct, setIsActiveProduct] = useState("Latest");
  const [activeTab, setActiveTab] = useState("Latest");

  const handleClick = (title) => {
    setIsActiveProduct(title);
    setActiveTab(title);
  };

  return (
    <div className="w-100 prl-100">
      <div className="bg-white border-b pb-2 border-gray-300">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-xl">Trending Products</h1>
          </div>
          <div className="flex justify-end gap-5 items-center">
            {title.map((title) => (
              <div key={title.name}>
                <p
                  className={`cursor-pointer pt-2 pb-2 pl-3 pr-3 rounded-3xl ${
                    activeTab === title.name ? "active" : ""
                  }`}
                  onClick={() => handleClick(title.name)}
                >
                  {title.name}
                </p>
              </div>
            ))}
            <p className="flex justify-around gap-2 items-center">
              <span className="icon p-1 border rounded-full">
                <GrFormPrevious />
              </span>
              <span className="p-1 border rounded-full icon">
                <GrFormNext />
              </span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="w-100 flex items-center justify-center">
        <div className="w-[100%] mt-3 grid grid-cols-4 gap-4">
          {isActiveProduct === "Latest" &&
            LatestProduct.map((items) => (
              <Link key={items.id} to={`/product/${items.id}`}>
                <TrendingProductCard
                  title={items.productName}
                  imageUrl={items.imageUrl}
                  price={items.price}
                />
              </Link>
            ))}
          {isActiveProduct === "Featured" &&
            FeaturedProducts.map((items) => (
              <Link key={items.id} to={`/product/${items.id}`}>
                <TrendingProductCard
                  title={items.productName}
                  imageUrl={items.imageUrl}
                  price={items.price}
                />
              </Link>
            ))}
          {isActiveProduct === "Best Seller" &&
            bestSeller.map((items) => (
              <Link key={items.id} to={`/product/${items.id}`}>
                <TrendingProductCard
                  title={items.productName}
                  imageUrl={items.imageUrl}
                  price={items.price}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
