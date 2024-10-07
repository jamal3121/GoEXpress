import React from "react";
import { GrFormNext } from "react-icons/gr";

const ProductCardSlider = ({ l }) => {
  const products = [
    {
      imageUrl:
        "https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/banners/category-img-05-150x170.png",
      category: "Computer",
      model: [
        { type: "dell" },
        { type: "Desktops" },
        { type: "laptop stand" },
        { type: "lenovo" },
      ],
    },
    {
      imageUrl:
        "https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/banners/category-img-03-150x170.png",
      category: "Mobile",
      brand: [
        { brand: "HTC" },
        { brand: "samsung" },
        { brand: "vivo" },
        { brand: "oppo" },
      ],
    },
    {
      imageUrl:
        "https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/banners/category-img-04-150x170.png",
      category: "Headphone",
      model: [{ type: "On-Ear" }, { type: "Earbuds" }, { type: "Open-Back" }],
    },
    {
      imageUrl:
        "https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/banners/category-img-02-150x170.png",
      category: "iPods",
      model: [{ type: "speakers" }, { type: "nikon" }, { type: "canon" }],
    },
    {
      imageUrl:
        "https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/banners/category-img-04-150x170.png",
      category: "Headphone",
      model: [{ type: "On-Ear" }, { type: "Earbuds" }, { type: "Open-Back" }],
    },
    {
      imageUrl:
        "https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/banners/category-img-02-150x170.png",
      category: "iPods",
      model: [{ type: "speakers" }, { type: "nikon" }, { type: "canon" }],
    },
  ];

  return (
    <div className="slider-container  overflow-hidden mb-10">
      <div
        className="slider"
        style={{
          transform: `translateX(-${l}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        {/* card  */}
        {products.map((item, index) => (
          <div key={index} className="product-card crd">
            <div className="card-header">
              <p className="category">{item.category}</p>
            </div>
            <div className="flex det p-2 items-center">
              <div className="models-brands w-[100%]">
                {item.model &&
                  item.model.map((model, modelIndex) => (
                    <div key={modelIndex} className="flex items-center text-gray-400 text-sm">
                      <GrFormNext />
                      {model.type}
                    </div>
                  ))}
                {item.brand &&
                  item.brand.map((brand, brandIndex) => (
                    <div key={brandIndex} className="flex items-center text-gray-400 text-sm">
                      <GrFormNext />
                      {brand.brand}
                    </div>
                  ))}
              </div>
              <div className="w-[100%] div">
              <img
                className="product-image image w-[80%]"
                src={item.imageUrl}
                alt={item.category}
              />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardSlider;
