import Image from "next/image";
import Link from "next/link";
import React from "react";
const categories = [1, 2, 3, 4, 5, 6, 7];

export default function CategoriesList() {
  return (
    <div className="flex overflow-x-scroll gap-x-4 px-4 scrollbar-hide ">
      {categories.map((categore) => (
        <div
          className="w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 md:w-1/3 flex-shrink-0 "
          key={categore}
        >
          <Link href="/list" className="flex flex-col gap-y-6">
            <div className="w-full relative h-80 ">
              <Image
                src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                fill
                className=" absolute object-cover rounded-md"
                sizes="100%"
              />
            </div>
            <h1>Category name</h1>
          </Link>
        </div>
      ))}
    </div>
  );
}
