"use client";
import React, { useState } from "react";

const stock = 4;
export const Add = () => {
  const [quantity, setQuantity] = useState(1);
  const handelQuantity = (type: "incress" | "decrease") => {
    type === "decrease" && quantity > 1 && setQuantity((prev) => prev - 1);
    type === "incress" &&
      quantity != stock &&
      quantity > 0 &&
      setQuantity((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1>Choose a Quanitiy</h1>
      <div className=" flex gap-4 items-center justify-between">
        <div className="flex items-center gap-4 ">
          <div className="flex gap-8 bg-gray-200 rounded-3xl px-4 py-2 items-center ">
            <button
              onClick={() => handelQuantity("decrease")}
              className=" cursor-pointer text-2xl"
            >
              -
            </button>
            {quantity}
            <button
              onClick={() => handelQuantity("incress")}
              className=" cursor-pointer text-2xl"
            >
              +
            </button>
          </div>
          <div className="text-sm">
            Only<span className="text-orange-500"> {stock} items</span> lift!{" "}
            <br />
            {"don't miss it"}
          </div>
        </div>
        <button className=" hover:bg-lama hover:text-white bg-white ring-1 ring-lama text-lama px-6 py-2 text-lg font-light rounded-3xl cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
