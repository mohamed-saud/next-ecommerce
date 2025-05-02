import React from "react";

export const Filter = () => {
  return (
    <div className="pt-12">
      <div className=" flex items-center gap-6 flex-wrap ">
        {/* FILTER TYPE  */}
        <div className="">
          <select
            id=""
            name="type"
            className="px-4 py-2 bg-[#ebeded] rounded-2xl font-medium text-xm "
          >
            <option>Type</option>
            <option value={"physical"}>Physical</option>
            <option value={"digital"}>Digital</option>
          </select>
        </div>
        {/* FILTER MIN PRICE  */}
        <div className="">
          <input
            type="min-price"
            placeholder="min price"
            className="px-4 py-2 ring-1 w-24 text-gray-400 font-medium rounded-2xl ring-gray-400 pl-2 text-xs"
          />
        </div>
        {/* FILTER MAX PRICE  */}
        <div className="">
          <input
            type="max-price"
            placeholder="max price"
            className="px-4 py-2 ring-1 w-24 text-gray-400 font-medium rounded-2xl ring-gray-400 pl-2 text-xs"
          />
        </div>
        {/* FILTER  SIZEIES  */}
        <div className="">
          <select
            id=""
            name="size"
            className="px-4 py-2  bg-[#ebeded] rounded-2xl font-medium text-xm "
          >
            <option>Size</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
          </select>
        </div>
        {/* FILTER COLORS  */}
        <div className="">
          <select
            id=""
            name="color"
            className="px-4 py-2 bg-[#ebeded] rounded-2xl font-medium text-xm "
          >
            <option>Color</option>
            <option value={"read"}>Read</option>
            <option value={"green"}>Greeen</option>
            <option value={"blue"}>Blue</option>
          </select>
        </div>
        {/* FILTER CATEGORIES  */}
        <div className="">
          <select
            id=""
            name="category"
            className="px-4 py-2 bg-[#ebeded] rounded-2xl font-medium text-xm "
          >
            <option>Category</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
          </select>
        </div>
        {/* ALL FILTERS  */}
        <div className="">
          <select
            id=""
            name="all-filter"
            className="px-4 py-2 bg-[#ebeded] rounded-2xl font-medium text-xm "
          >
            <option>All filter</option>
            <option value={"1"}>1</option>
            <option value={"2"}>2</option>
          </select>
        </div>
        <div className="ml-auto">
          <select
            id=""
            name="sort by"
            className="px-4 py-2 ring-1 w-30 text-gray-400 font-medium rounded-2xl ring-gray-400 pl-2 text-xs"
          >
            <option>Sort By</option>
            <option value={"1"}>Price (low to high)</option>
            <option value={"1"}>Price (high to low)</option>
            <option value={"2"}>newest</option>
            <option value={"2"}>oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};
