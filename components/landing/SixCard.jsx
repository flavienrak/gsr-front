import React from "react";
import { BiSolidLayer } from "react-icons/bi";
import style from "../../styles/HeaderLanding.module.css";
import { PetitCardLanding } from "./UtilsLanding";

export default function SixCard() {
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center gap-16 bg-[#0000008e]  px-[6rem] text-[var(--white)] ">
      <div className=" w-full flex items-center justify-center flex-col gap-2">
        <p className={`${style.titre} uppercase text-4xl font-bold `}>
          Objectifs
        </p>
        <p className=" text-slate-400 text-xl ">
          Voici les objectifs de la création de cette application web
        </p>
      </div>
      <div className=" grid grid-rows-2 grid-cols-3 gap-x-8 gap-y-12">
        <PetitCardLanding
          icon={
            <BiSolidLayer
              size={"2.5rem"}
              className=" text-[var(--blue-theme)] "
            />
          }
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={
            <BiSolidLayer
              size={"2.5rem"}
              className=" text-[var(--blue-theme)] "
            />
          }
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={
            <BiSolidLayer
              size={"2.5rem"}
              className=" text-[var(--blue-theme)] "
            />
          }
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={
            <BiSolidLayer
              size={"2.5rem"}
              className=" text-[var(--blue-theme)] "
            />
          }
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={
            <BiSolidLayer
              size={"2.5rem"}
              className=" text-[var(--blue-theme)] "
            />
          }
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={
            <BiSolidLayer
              size={"2.5rem"}
              className=" text-[var(--blue-theme)] "
            />
          }
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
      </div>
    </div>
  );
}
