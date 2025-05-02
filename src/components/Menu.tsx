"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const handelMenu = () => {
    setIsOpen((prev) => !prev);
    const body = document.getElementsByName("body");
  };
  return (
    <div className="md:hidden overflow-hidden">
      <Image
        onClick={handelMenu}
        src="/menu.png"
        alt=""
        height={28}
        className="cursor-pointer"
        width={28}
      />
      {isOpen && (
        <div className=" absolute bg-black text-white top-20 left-0 h-[calc(100vh-80px)] w-full flex items-center justify-center flex-col gap-8  z-50 ">
          <Link href="/">Homepage</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
