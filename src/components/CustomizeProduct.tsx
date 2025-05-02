import { Span } from "next/dist/trace";
import React from "react";
import { Add } from "./Add";

export const CustomizeProduct = () => {
  return (
    <div className=" flex flex-col gap-y-4 pt-6 lg:p-0 px-4">
      {/* PRODUCT INPHOE  */}
      <div className=" flex flex-col gap-4  py-4">
        <h1 className="text-xl font-semibold ">Product Name</h1>
        <p className="font-medium text-sm text-gray-500  ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis id
          mollitia aperiam dolores, corrupti soluta temporibus rem eligendi?
          Sapiente tempora, soluta commodi deserunt expedita excepturi minima
          porro reprehenderit debitis aliquam?
        </p>
      </div>
      <div className="h-1 w-full bg-gray-100 rounded-full" />
      {/* PRODUCT PRICE  */}
      <div className="flex gap-2 py-4 items-center">
        <h2 className="text-gray-400 text-lg line-through">$65</h2>
        <h1 className="text-2xl">$60.5</h1>
      </div>
      <div className="h-1 w-full bg-gray-100 rounded-full" />

      {/* CUSTOME PRODUCT BUY COLOR ANN SIZE  */}
      <div className="flex flex-col gap-4 py-4">
        {/* COLOR  */}
        <div className=" flex flex-col gap-4">
          <h1>Choose a color</h1>
          <ul className=" flex items-center gap-4">
            <li className=" rounded-full h-8 w-8 cursor-pointer bg-red-500 relative">
              <div className=" w-10 h-10 rounded-full ring-2 ring-gray-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  " />
            </li>
            <li className=" rounded-full h-8 w-8 cursor-pointer bg-blue-300 relative"></li>
            <li className=" rounded-full h-8 w-8 cursor-pointer bg-blue-50 relative">
              <div className=" w-10 h-1 bg-red-400 rounded-full -rotate-45 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  " />
            </li>
          </ul>
        </div>
        <div className="h-1 w-full bg-gray-100 rounded-full" />
        {/* SIZE  */}
        <div className="flex gap-4 flex-col">
          <h1>Choose a color</h1>
          <ul className="flex gap-3  ">
            <li className="bg-white ring-1 ring-lama text-lama px-6  py-1 text-md rounded-lg cursor-pointer">
              Small
            </li>
            <li className="bg-pink-500 ring-1 ring-lama text-gray-50 px-6 py-1 text-md rounded-lg cursor-pointer">
              Meduim
            </li>
            <li className="bg-pink-200 ring-1 cursor-not-allowed ring-pink-100 text-gray-50 px-6 py-1 text-md rounded-lg ">
              Large
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
