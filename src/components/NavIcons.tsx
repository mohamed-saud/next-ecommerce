"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "./CartModal";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = false;

  const handelProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };
  const handelOpenCart = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div className="flex gap-4 items-center xl:gap-6 relative ">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className=" cursor-pointer"
        onClick={handelProfile}
      />
      {isProfileOpen && (
        <div className=" absolute top-11 left-0 text-sm rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 p-4">
          <Link href="/profile">Profile</Link>
          <div className=" cursor-pointer mt-2">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className=" cursor-pointer"
      />
      <div className=" relative" onClick={handelOpenCart}>
        <div className=" absolute -top-4 -right-4 w-6 h-6  rounded-full  bg-lama text-white flex items-center justify-center">
          <span>2</span>
        </div>
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className=" cursor-pointer"
        />
        {isCartOpen && <CartModal />}
      </div>
    </div>
  );
}
