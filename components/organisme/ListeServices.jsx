"use client";

import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import logoservice from "../../public/images/logoservice.png";
export default function ListeServices({ titre, description }) {
  return (
    <>
      <div className="flex w-72  justify-center rounded-lg gap-3 py-4 bg-[var(--gray)] border border-b[var(--gray-text)] ">
        <div className="w-20 h-20 bg-[var(--primary-color)] rounded-lg">
          <Image
            alt=""
            className=" object-cover w-full h-full bg-[var(--primary-color)] rounded-lg"
            src={logoservice}
          />
        </div>
        <div className="flex leading-0 gap-[.1rem] flex-col">
          <p className="text-semibold text-sm">{titre}</p>
          <p className="text-[var(--gray-text)] text-xs">{description}</p>
          <div className="flex  bg-[var(--primary-color)] justify-center py-2 rounded-lg items-center">
            <button className=" cursor-pointer  text-[var(--white)] rounded-lg  ">
              Consulter
            </button>
            <IoMdArrowDropright size={25} color="var(--white)" />
          </div>
        </div>
      </div>
    </>
  );
}
