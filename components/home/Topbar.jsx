import Image from "next/image";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import Bouton from "./Utils";

export default function Topbar() {
  return (
    <>
      <div className="  w-full flex items-center justify-between bg-[var(--white)] py-3 px-8 ">
        <div className=" flex items-center gap-4">
          <Image src={"/images/github.png"} width={30} height={30} alt="logo" />
          <h1 className=" text-3xl uppercase">logo</h1>
        </div>
        <div className=" relative">
          <input
            type="search"
            className=" outline-none   py-2 px-8 bg-[var(--gray)] w-[25rem] rounded-full placeholder:text-[var(--gray-text)]  "
            placeholder=" tapez quelques chose à chercher"
          />
          <IoMdSearch
            className=" absolute top-2 left-2 text-[var(--gray-text)] "
            size={"1.5rem"}
          />
        </div>
        <Bouton label={"créer"} color={"white"} bg={"primary-color"} />
      </div>
    </>
  );
}
