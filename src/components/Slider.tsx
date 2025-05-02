"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];
export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const iterval = setInterval(() => {
      currentSlide === slides.length - 1
        ? setCurrentSlide(0)
        : setCurrentSlide(currentSlide + 1);
    }, 3000);
    return () => clearInterval(iterval);
  });
  return (
    <div className=" h-[calc(100vh-80px)] w-full overflow-hidden relative">
      <div
        className="w-max flex  h-full transition-all duration-1000 ease-in-out "
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`slide flex-col w-screen h-full md:flex-row flex items-center justify-center ${slide.bg} `}
            key={slide.id}
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col  md:w-1/2 w-full items-center justify-center text-center gap-6 p-6">
              <h1 className=" text-2xl ">{slide.title}</h1>
              <h2 className="text-6xl">{slide.description}</h2>
              <Link href={slide.url}>
                <button className="bg-black text-gray-50 px-3 text-md py-2 rounded-md hover:bg-white hover:text-gray-900 ring-1 ring-black">
                  Shop now
                </button>
              </Link>
            </div>
            {/* RIGHT SIDE  */}
            <div className=" md:w-1/2 w-full relative h-full">
              <Image
                src={slide.img}
                alt=""
                sizes="100%"
                className="object-cover "
                fill
              />
            </div>
          </div>
        ))}
      </div>
      <div className="m-auto left-1/2 translate-x-[-50%] flex absolute  gap-2 bottom-4 z-10">
        {slides.map((slide, index) => (
          <div
            onClick={() => setCurrentSlide(index)}
            className=" cursor-pointer h-5 w-5 left-1/2 rounded-full ring-1 ring-gray-700  flex items-center justify-center"
            key={slide.id}
          >
            <div
              className={`m-3 h-[3px] w-[3px] p-2 rounded-full ${
                currentSlide === index && "bg-gray-700"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
