"use client";
import Image from "next/image";
import React, { useState } from "react";

const imageList = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/20798930/pexels-photo-20798930/free-photo-of-yellow-and-stone-fortification-in-morocco.png?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/29626564/pexels-photo-29626564/free-photo-of-stylish-woman-posing-in-yellow-jacket-outdoors.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/29237856/pexels-photo-29237856/free-photo-of-vibrant-yellow-ginkgo-leaves-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/30487473/pexels-photo-30487473/free-photo-of-misty-winter-forest-path-covered-with-frost.png?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

export const ProductImages = () => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className=" flex flex-col gap-8 ">
      <div className="h-[500px]  relative p-4">
        <Image
          fill
          sizes="50vw"
          className=" object-cover rounded-md"
          src={imageList[imageIndex].url}
          alt=""
        />
      </div>
      <ul className="flex justify-between gap-6 overflow-x-scroll scrollbar-hide ">
        {imageList.map((img, i) => (
          <div
            className={` relative w-1/3 h-[100px] flex-shrink-0 `}
            key={img.id}
          >
            <Image
              onClick={() => setImageIndex(i)}
              fill
              sizes="100%"
              className=" object-cover rounded-md  cursor-pointer"
              src={img.url}
              alt=""
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
