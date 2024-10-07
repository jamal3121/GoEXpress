import React from "react";

const SpecialCard = () => {
  const products = [
    {
      imageUrl:
        "https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/product/13-1-494x593.jpg",
      productName: "Similique Suntin Culpaqui",
      price: "104.00",
      mrp: "337.99",
    },
    {
      imageUrl:
        "https://opencart.templatetrip.com/OPC02/OPC050_goexpress/OPC05/image/cache/catalog/demo/product/20-1-494x593.jpg",
      productName: "Similique Suntin Culpaqui",
      price: "50.00",
      mrp: "337.99",
    },
  ];
  return (
    <div className="w-100 mt-5 flex flex-wrap gap-5">
      {products.map((item) => (
        <div className="card w-[170px] border border-thin flex flex-col items-center gap-0.5 p-1">
          <div className="w-[100%] border-b border-b-slate-300 flex flex-col items-center">
            <img className="w-[90%]" src={item.imageUrl} alt="" />
            <div className="h-[20px] text-yellow-400 font-semibold flex items-center">
              <p> &#9734; &#9734; &#9734; &#9734; &#9734; </p>
            </div>
          </div>
          <div className="w-[100%] flex flex-col items-center border-t border-t-slate-300 p-2">
            <p className="text-xs text-gray-500">{item.productName}</p>
            <p className="flex gap-2 text-sm pt-2 ">
              <span className="font-semibold">${item.price}</span>
              <span className="text-gray-400 line-through">${item.mrp}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialCard;
