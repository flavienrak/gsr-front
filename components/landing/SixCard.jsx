import React from "react";
import { BiSolidLayer } from "react-icons/bi";
import style from "../../styles/HeaderLanding.module.css";
import { PetitCardLanding } from "./UtilsLanding";

export default function SixCard() {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-28 bg-[var(--bg)] p-28 text-[var(--white)] ">
      <div className=" w-full flex items-center justify-center flex-col gap-4">
        <p className={`bgText uppercase text-8xl font-bold `}>Objectifs</p>
        <p className=" text-[var(--white)] font-light opacity-80">
          Voici les objectifs de la création de cette application web
        </p>
      </div>
      <div className=" grid grid-rows-2 grid-cols-3 gap-12">
        <PetitCardLanding
          icon={<BiSolidLayer size={"2.5rem"} />}
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={<BiSolidLayer size={"2.5rem"} />}
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={<BiSolidLayer size={"2.5rem"} />}
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={<BiSolidLayer size={"2.5rem"} />}
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={<BiSolidLayer size={"2.5rem"} />}
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
        <PetitCardLanding
          icon={<BiSolidLayer size={"2.5rem"} />}
          titre={" Organised Layers"}
          desc={"The File is named , grouped And Well Organised"}
        />
      </div>
    </div>
  );
}
