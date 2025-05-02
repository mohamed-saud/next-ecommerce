"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function SearchBar() {
  const router = useRouter();

  const handelSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let name = formData.get("name") as string;

    if (name) router.push(`/list?name=${name}`);
  };
  return (
    <form
      onSubmit={handelSearch}
      className="flex justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className=" flex-1 bg-transparent outline-none"
      />
      <button className=" cursor-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
}
