import React from "react";

const Reviews = () => {
  return (
    <div className=" pt-4 pb-4 w-[100%] flex flex-col gap-4 ">
      <div>
        <p className="text-gray-500 text-xs">
          There are no reviews for this product.
        </p>
        <p className="text-gray-500 text-md mt-4">Write a review</p>
      </div>
      <div>
        <div>
          <label htmlFor="name" className="text-xs text-gray-700 font-light">
            Name
          </label>
          <input
            className="border border-gray-200 w-[100%] outline-0 p-2 text-xs rounded-sm"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="review" className="text-xs text-gray-700 font-light">
            Your Review
          </label>
          <textarea
            className="border border-gray-200 p-2 text-xs rounded-sm"
            rows={5}
            style={{ resize: "none", width: "100%", outline: 0 }}
            type="text"
            id="review"
            name="review"
            required
          />
        </div>
        <p className="text-xs font-semibold text-gray-400">
          Note: HTML is not translated!
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <label
          type="text"
          className="text-sm font-medium text-gray-700"
          htmlFor="rating"
        >
          Rating
        </label>
        <div className="flex gap-2 items-center">
          <label className="text-xs font-medium text-gray-400">Bad</label>
          <input type="radio" name="rating" id="" />
          <input type="radio" name="rating" id="" />
          <input type="radio" name="rating" id="" />
          <input type="radio" name="rating" id="" />
          <input type="radio" name="rating" id="" />
          <label className="text-xs font-medium text-gray-400" htmlFor="good">
            Good
          </label>
        </div>
      </div>
      <div className="w-[100%] flex justify-end items-center">
        <button
          className="hover:text-black hover:bg-yellow-400 hover:font-semibold text-end rounded-3xl text-sm mt-4 bg-black text-white p-2 pb-2 pl-4 pr-4"
          type="submit"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Reviews;
