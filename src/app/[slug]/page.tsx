import { Add } from "@/components/Add";
import { CustomizeProduct } from "@/components/CustomizeProduct";
import { ProductImages } from "@/components/ProductImages";
import React from "react";

export default function SinglePage() {
  return (
    <div className="md:px-8 lg:px-16 xl-32 2xl:px-64  relative flex flex-col lg:flex-row gap-6">
      {/* IMAGES  */}
      <div className=" w-full lg:w-1/2  lg:sticky top-4 h-max ">
        <ProductImages />
      </div>
      {/* TEXT  */}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6">
        <CustomizeProduct />
        <Add />
        <div className="h-1 w-full bg-gray-100" />
        {/* RIVIEW PRODUCT  */}
        <div className="flex flex-col gap-8">
          <div className=" flex flex-col gap-2">
            <h4 className="font-semibold text-lg capitalize">Title</h4>
            <p className="font-light text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odio
              unde, ab dignissimos ratione alias minus molestiae culpa,
              consectetur et error aperiam officia eum voluptatum magni ut vero!
              Qui, tempora!
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <h4 className="font-semibold text-lg capitalize">Title</h4>
            <p className="font-light text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odio
              unde, ab dignissimos ratione alias minus molestiae culpa,
              consectetur et error aperiam officia eum voluptatum magni ut vero!
              Qui, tempora!
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <h4 className="font-semibold text-lg capitalize">Title</h4>
            <p className="font-light text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odio
              unde, ab dignissimos ratione alias minus molestiae culpa,
              consectetur et error aperiam officia eum voluptatum magni ut vero!
              Qui, tempora!
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <h4 className="font-semibold text-lg capitalize">Title</h4>
            <p className="font-light text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odio
              unde, ab dignissimos ratione alias minus molestiae culpa,
              consectetur et error aperiam officia eum voluptatum magni ut vero!
              Qui, tempora!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
