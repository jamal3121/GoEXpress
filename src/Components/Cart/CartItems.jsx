import React from "react";
import useFetchData from "../../Hooks/useFetchData";
import "./CartDetails.css";

const CartItems = () => {
  // Specify the URL for fetching data
  const { data, loading, error } = useFetchData(
    "https://66c432c4b026f3cc6cee532c.mockapi.io/demo"
  );

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  // Check if data is available
  if (!data || data.length === 0) {
    return <div>No items in the cart.</div>;
  }

  return (
    <div className="w-full mt-4">
      <table className="w-full">
        <thead>
          <tr>
            {[
              "Image",
              "Product Name",
              "Model",
              "Quantity",
              "Unit Price",
              "Total",
            ].map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="w-[100px]">
                <img
                  className="w-full border border-gray-200"
                  src={item.imageSrc}
                  alt={item.productName}
                />
              </td>
              <td className="text-sm text-gray-400 font-bold">
                {item.productName}
              </td>
              <td className="font-semibold text-sm ">{item.model || "N/A"}</td>{" "}
              {/* Assuming you might have a model property */}
              <td className="font-semibold text-sm ">{item.quantity}</td>
              <td className="font-semibold text-sm ">
                ${item.price.toFixed(2)}
              </td>{" "}
              {/* Formatting price */}
              <td className="font-semibold text-sm ">
                ${(item.price * item.quantity).toFixed(2)}
              </td>{" "}
              {/* Total calculation */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;
