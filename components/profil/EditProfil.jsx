"use client";
import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";
import pdp from "../../public/image/pdpprofil.png";
import InputEdit from "./InputEdit";
export default function EditProfil({ setEdit }) {
  return (
    <>
      <div className="fixed w-full top-0 flex items-center justify-center left-0 h-screen bg-gray-900/90">
        <div className=" bg-black/80  z-10 w-[44rem] px-10 py-8 gap-3 flex flex-col items-center text-[var(--white)]  rounded-lg ">
          <div className="flex w-full justify-between gap-2">
            <div className="flex w-full flex-col justify-between items-center">
              <h1 className="text-2xl pt-7">Edit your profil</h1>
              <div className="w-full h-[1px] bg-[var(--white)] opacity-45"></div>
            </div>
            {/* photo */}
            <div className="flex relative w-[50%] items-center justify-center gap-4">
              <Image src={pdp} className="w-32 h-32 rounded-lg object-cover" />
              <div className=" self-end flex flex-col gap-2">
                <button className="bg-[var(--white)] text-xs  px-3 py-1 text-black rounded-sm">
                  Supprimer
                </button>
                <button className="bg-[var(--bg-blue)]  text-xs px-4 rounded-sm py-1">
                  Changer
                </button>
              </div>
            </div>
          </div>

          {/* input */}
          <div className="w-full flex flex-col gap-4">
            <div className="flex w-full gap-4 flex-col">
              <InputEdit label="Nom :" />
              <InputEdit label="Prénom :" />
            </div>

            <div className="w-full grid grid-cols-3 gap-4">
              <InputEdit label="Langage :" />
              <InputEdit label="Membre de:" />
              <InputEdit label="Date  de naissance :" />
            </div>

            <div className="w-full grid grid-cols-3 gap-4">
              <InputEdit label="Matricule :" />
              <InputEdit label="Niveau :" />
              <InputEdit label="Parcours :" />
            </div>
          </div>
          {/* delete */}
          <div className="flex w-full mt-1 gap-1">
            <button
              onClick={() => setEdit(false)}
              className="w-1/2  text-black bg-[var(--white)] py-2 cursor-pointer rounded-sm"
            >
              Fermer
            </button>
            <button className="bg-[var(--bg-blue)] w-1/2 rounded-sm cursor-pointer py-2">
              Sauvegarde
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
