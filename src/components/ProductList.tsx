import wixClientServer from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductList({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) {
  const wixServer = await wixClientServer();
  const res = await wixServer.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();

  const products = res._items;

  return (
    <div className="flex gap-y-16  flex-wrap ">
      {/* PRODUCT ITEMS  */}
      {products.map((product: object) => {
        return (
          <div
            className="md:w-1/4 w-full sm:w-1/2 flex flex-col gap-4 px-6"
            key={product._id}
          >
            <Link href="/test" className="   ">
              <div className=" w-full relative h-80 ">
                <Image
                  src={product.media.mainMedia.thumbnail.url}
                  alt=""
                  fill
                  className=" absolute object-cover rounded-md z-10 hover:opacity-0 transition-all duration-300 ease-out"
                  sizes="100%"
                />
                <Image
                  src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                  fill
                  className=" absolute object-cover rounded-md"
                  sizes="100%"
                />
              </div>
            </Link>
            <div className="flex items-center w-full  justify-between text-center text-gray-900 font-semibold">
              <h2>{product.name}</h2>
              <span>{product.price.formatted.price}</span>
            </div>
            <h1 className="text-gray-500 text-md">Hight qualety now</h1>
            <button className=" ring-1 w-max ring-lama bg-white text-lama rounded-3xl px-4 py-2">
              Add To cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
