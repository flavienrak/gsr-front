import Image from "next/image";
import React from "react";
import Bouton, { Lien } from "./Utils";
import Link from "next/link";
import { IoIosHome, IoMdHome } from "react-icons/io";
import { BiHome, BiHomeAlt } from "react-icons/bi";

export default function Navbar() {
  return (
    <>
      <div className=" flex flex-col items-center gap-4 ">
        <div className=" flex items-center gap-4 px-4 py-6 bg-[var(--white)] rounded-3xl ">
          <div className=" relative w-12 h-12 rounded-full">
            <Image
              src={"/images/github.png"}
              alt=""
              fill
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className=" flex flex-col ">
            <p>Lionel Socrate</p>
            <p className=" text-[var(--gray-text)] ">
              lionelsocrate7@gmail.com
            </p>
          </div>
        </div>
        <div className=" w-full  h-full bg-[var(--white)]  rounded-3xl overflow-hidden ">
          <Lien url={""} icon={<BiHome size={"1.5rem"} />} label={"home"} />
          <Lien url={""} icon={<BiHome size={"1.5rem"} />} label={"home"} />
          <Lien url={""} icon={<BiHome size={"1.5rem"} />} label={"home"} />
          <Lien url={""} icon={<BiHome size={"1.5rem"} />} label={"home"} />
        </div>
        <Bouton
          label={" créer service"}
          bg={"primary-color"}
          color={"white"}
          width={"full"}
        />
      </div>
    </>
  );
}
