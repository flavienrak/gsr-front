import Image from "next/image";
import React from "react";

export default function Topbar() {
  return (
    <>
      <div className=" fixed top-0 left-0 w-full flex items-center justify-between bg-[var(--white)] py-2 px-8 ">
        <div className=" flex items-center gap-4">
          <Image src={""} alt="logo" />
          <h1>logo</h1>
        </div>
        <div className=" relative">
          <input type="search" className="" />
        </div>
      </div>
    </>
  );
}
