"use client";

import { IoMdArrowDropright } from "react-icons/io";
import Navbar from "../home/Navbar";
import Right from "../home/Right";

export default function ViewService() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col">
        <div className="w-full h-full flex  gap-8 px-8 py-8 ">
          <div className=" w-3/5 h-full flex flex-col  items-center gap-6 px-8 py-6 bg-[var(--white)] rounded-3xl ">
            <p className=" bgText text-4xl ">Demande d'acte de naissance</p>
            <div className=" w-full flex flex-col gap-4">
              <div className=" w-full flex flex-col gap-2 ">
                <p className=" bgText capitalize text-2xl">Description</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veritatis officiis corporis consequatur dolores perferendis
                  rerum, quaerat inventore aut omnis illo sequi libero debitis
                  atque, ipsam repellendus quia. Tempora, aut minima?
                </p>
              </div>
              <div className=" w-full flex items-center">
                <div className=" w-1/2 flex flex-col gap-2 ">
                  <p className=" bgText capitalize text-2xl">tarif</p>
                  <p className=" text-xl">Ar 1500</p>
                </div>
                <div className=" w-1/2 flex flex-col gap-2 ">
                  <p className=" bgText capitalize text-2xl">durée</p>
                  <p className=" text-xl">Environ 2mois</p>
                </div>
              </div>
            </div>
            <div className="  w-full h-full grid grid-cols-2 gap-4">
              <div className=" h-full bg-[var(--gray)] rounded-xl "></div>
              <div className=" h-full bg-[var(--gray)] rounded-xl "></div>
            </div>
            <button className=" text-[var(--white)] bg-[var(--primary-color)] py-2 px-8 rounded-lg self-end flex items-center gap-8 ">
              <p>Utiliser</p>
              <IoMdArrowDropright size={"1.5rem"} />
            </button>
          </div>
          <Right />
        </div>
      </div>
    </>
  );
}
