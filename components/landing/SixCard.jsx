import React from "react";
import { BiSolidLayer } from "react-icons/bi";
import { PetitCardLanding } from "./UtilsLanding";
import { IoIosArchive } from "react-icons/io";

export default function SixCard() {
  return (
    <div className=" w-full h-screen px-[6rem] flex items-center justify-center flex-col gap-16 bg-[var(--gray)] ">
      <div className=" w-full flex items-center justify-center flex-col gap-2">
        <p className=" text-5xl font-bold text-[var(--primary-color)] uppercase">
          Objectifs
        </p>
      </div>
      <div className=" grid grid-rows-2 grid-cols-3 gap-x-8 gap-y-12">
        <div className=" relative flex items-center justify-center flex-col gap-2 px-16 py-12 bg-white rounded-xl shadow-sm">
          <p className=" text-3xl font-bold text-slate-500">Organised Layers</p>
          <p className=" text-[var(--gris-text)] text-center ">
            The File is named , grouped And Well Organised
          </p>
          <div className=" absolute top-[-2.5rem] left-[41%] w-[5rem] h-[5rem] rounded-full bg-[rgb(64,191,246)] flex items-center justify-center shadow-2xl shadow-[rgb(64,191,246)] ">
            <IoIosArchive className=" text-white" size={"2.5rem"} />
          </div>
        </div>
        <div className=" relative flex items-center justify-center flex-col gap-2 px-16 py-12 bg-white rounded-xl shadow-sm">
          <p className=" text-3xl font-bold text-slate-500">Pixel Perfect</p>
          <p className=" text-[var(--gris-text)] text-center ">
            Distance & Measure Using even Multiple Of Measure
          </p>
          <div className=" absolute top-[-2.5rem] left-[41%] w-[5rem] h-[5rem] rounded-full bg-[rgb(64,191,246)] flex items-center justify-center shadow-2xl shadow-[rgb(64,191,246)] ">
            <IoIosArchive className=" text-white" size={"2.5rem"} />
          </div>
        </div>
        <div className=" relative flex items-center justify-center flex-col gap-2 px-16 py-12 bg-white rounded-xl shadow-sm">
          <p className=" text-3xl font-bold text-slate-500">Components</p>
          <p className=" text-[var(--gris-text)] text-center ">
            There are supporting Componets To Make it Easier.
          </p>
          <div className=" absolute top-[-2.5rem] left-[41%] w-[5rem] h-[5rem] rounded-full bg-[rgb(138,72,253)] flex items-center justify-center shadow-2xl shadow-[rgb(138,72,253)] ">
            <IoIosArchive className=" text-white" size={"2.5rem"} />
          </div>
        </div>
        <div className=" relative flex items-center justify-center flex-col gap-2 px-16 py-12 bg-white rounded-xl shadow-sm">
          <p className=" text-3xl font-bold text-slate-500">Free Fonts</p>
          <p className=" text-[var(--gris-text)] text-center ">
            Typography Based On The Free Fonts Family
          </p>
          <div className=" absolute top-[-2.5rem] left-[41%] w-[5rem] h-[5rem] rounded-full bg-[rgb(255,120,143)] flex items-center justify-center shadow-2xl shadow-[rgb(255,120,143)] ">
            <IoIosArchive className=" text-white" size={"2.5rem"} />
          </div>
        </div>
        <div className=" relative flex items-center justify-center flex-col gap-2 px-16 py-12 bg-white rounded-xl shadow-sm">
          <p className=" text-3xl font-bold text-slate-500">Mobile Version </p>
          <p className=" text-[var(--gris-text)] text-center ">
            Seamiessty blending stunning design with intutive functionalityfor
            an unparalleled
          </p>
          <div className=" absolute top-[-2.5rem] left-[41%] w-[5rem] h-[5rem] rounded-full bg-[rgb(255,173,0)] flex items-center justify-center shadow-2xl shadow-[rgb(255,173,0)] ">
            <IoIosArchive className=" text-white" size={"2.5rem"} />
          </div>
        </div>
        <div className=" relative flex items-center justify-center flex-col gap-2 px-16 py-12 bg-white rounded-xl shadow-sm">
          <p className=" text-3xl font-bold text-slate-500">
            Easy Customisable
          </p>
          <p className=" text-[var(--gris-text)] text-center ">
            100% Easy To Change & Customisable
          </p>
          <div className=" absolute top-[-2.5rem] left-[41%] w-[5rem] h-[5rem] rounded-full bg-[var(--green)] flex items-center justify-center shadow-2xl shadow-[var(--green)] ">
            <IoIosArchive className=" text-white" size={"2.5rem"} />
          </div>
        </div>
      </div>
    </div>
  );
}
