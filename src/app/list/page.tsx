import { Filter } from "@/components/Filter";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import React from "react";

export default function ListPage() {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl-32 2xl:px-64 relative">
      {/* CAMPING  */}
      <div className="bg-pink-50  flex justify-between px-4 h-64  ">
        <div className=" sm:w-2/3 w-full flex  flex-col items-center justify-center gap-8 ">
          <h1 className=" text-3xl font-semibold leading-[48px] text-gray-700">
            Grap up to 50% of on <br /> Selectd Products
          </h1>
          <button className=" rounded-2xl text-white px-3 py-2 text-sm font-semibold bg-lama">
            Shop Now
          </button>
        </div>
        <div className=" relative w-1/3 sm:flex hidden ">
          <Image src="/woman.png" fill alt="" className=" object-contain" />
        </div>
      </div>
      {/* FELTER  */}
      <Filter />
      {/* PRODUCTS  */}
      <h1 className="font-semibold text-xl my-12  ">Shose For You</h1>
      <ProductList />
    </div>
  );
}
