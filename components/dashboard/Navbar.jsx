import Image from "next/image";
import React from "react";
import logo from "../../public/images/google.png";
import {
  IoGrid,
  IoGridOutline,
  IoLogOutOutline,
  IoPersonOutline,
} from "react-icons/io5";
import style from "../../styles/Dashboard.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className=" relative h-full w-[18rem] overflow-hidden ">
        <div className={`${style.shadow1} z-10`}></div>
        <div className={`${style.shadow2} z-10`}></div>
        <div className=" absolute top-0 left-0 z-20 w-full h-full flex flex-col items-center gap-8 py-4 px-6 bg-[rgb(0,0,0,0.25)] backdrop-blur-[10px] text-[var(--white)] ">
          <div className=" flex items-center ">
            <Image src={logo} alt="logo" className=" w-12" />
            <p className=" bgText text-2xl">Infinity</p>
          </div>
          <div className=" w-full h-full flex flex-col items-center justify-between py-4">
            <div className=" w-full flex flex-col gap-2 ">
              <Link
                href={"#"}
                className=" flex items-center gap-4 bg-[rgb(255,255,255,0.25)] rounded-lg py-2 px-4 "
              >
                <IoGridOutline size={"1.25rem"} />
                <p>Dashboard</p>
              </Link>
              <Link
                href={"#"}
                className=" flex items-center gap-4  rounded-lg py-2 px-4 "
              >
                <IoGridOutline size={"1.25rem"} />
                <p>Acceiul</p>
              </Link>
              <Link
                href={""}
                className=" flex items-center gap-4  rounded-lg py-2 px-4 "
              >
                <IoPersonOutline size={"1.25rem"} />
                <p>Profil</p>
              </Link>
              <Link
                href={""}
                className=" flex items-center gap-4  rounded-lg py-2 px-4 "
              >
                <IoGridOutline size={"1.25rem"} />
                <p>Profil</p>
              </Link>
            </div>
            <button className=" flex items-center gap-4  rounded-lg py-2 px-4 ">
              <IoLogOutOutline size={"1.25rem"} />
              <p>Se Deconnecter</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
