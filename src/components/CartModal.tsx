"use Client";
import Image from "next/image";
import React from "react";

export default function CartModal() {
  const cartItem = true;
  return (
    <div className=" absolute top-11 right-0 text-sm rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 p-4 bg-white flex flex-col gap-6">
      {!cartItem ? (
        <div className=""> Cart are Empty</div>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            {/*ITEMS*/}
            <div className=" flex w-max  gap-8">
              <Image
                className=" object-cover  rounded-sm cursor-pointer"
                src="https://images.pexels.com/photos/9667337/pexels-photo-9667337.jpeg"
                alt=""
                width="72"
                height="96"
              />
              <div className="flex flex-col gap-8">
                {/*TOP*/}
                <div className=" flex justify-between gap-4">
                  <div>
                    <h1 className=" font-semibold text-"> Iphone 13 pro max</h1>
                    <span className="text-gray-500">available</span>
                  </div>
                  <span className="text-sm text-gray-900">$99.9</span>
                </div>
                {/*BOOTOM*/}
                <div className=" flex justify-between gap-4">
                  <div>
                    <span className="text-gray-500">Qity 1</span>
                  </div>
                  <span className="text-sm cursor-pointer text-blue-500">
                    Remove
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h1>Subtotal</h1>
              <span>$44.3</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-sm text-gray-400">
                Shoping and texes calculcted at checkout
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <button className="bg-white text-gray-900 px-4 py-2 rounded-md ring-1 ring-gray-500">
                View Cart
              </button>
              <button className="bg-black text-gray-50 px-4 py-2 rounded-md ring-1 ring-gray-500">
                Check Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
