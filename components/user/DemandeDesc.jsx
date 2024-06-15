"use client";
import { useState } from "react";
import { FileInputComponent, Inputdemandetext } from "../home/Utils";
import HistoDemande from "./HistoDemande";
import Right from "../home/Right";
import Navbar from "../home/Navbar";
import Topbar from "../home/Topbar";
export default function DemandeDesc() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden">
        <Topbar />
        <div className=" bg-[var(--gray)] w-full h-full flex  gap-8 px-8 py-8 ">
          <Navbar />
          <div className=" w-3/5 flex bg-[var(--white)]  flex-col gap-4 overflow-y-scroll">
            <div className=" ">
              <div>
                <h1 className="text-2xl py-2 text-center font-semibold">
                  Demande de service
                </h1>
              </div>
              <div className=" flex gap-5 w-full flex-col p-8">
                <div className="flex  flex-col">
                  <label htmlFor="nom" className="text-sm pl-2 font-bold">
                    Nom *
                  </label>
                  <input
                    type="text"
                    className="outline-none text-sm px-2 py-3   bg-[var(--gray)]"
                  />
                </div>
                <div className="flex  flex-col">
                  <label htmlFor="nom" className="text-sm pl-2 font-bold">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    className="outline-none text-sm px-2 py-3 bg-[var(--gray)]"
                  />
                </div>{" "}
                <div className="  w-full flex gap-4">
                  <div className=" w-1/2 flex  flex-col">
                    <label htmlFor="nom" className="text-sm pl-2 font-bold">
                      Numéro du CIN *
                    </label>
                    <input
                      type="text"
                      className=" w-full outline-none  text-sm px-2  py-3 bg-[var(--gray)]"
                    />
                  </div>

                  <div className=" w-1/2 flex flex-col">
                    <label htmlFor="nom" className="text-sm pl-3 font-bold">
                      Nom de service *
                    </label>
                    <input
                      type="text"
                      className=" w-full outline-none  text-sm px-3  py-3 bg-[var(--gray)]"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-xl">Informations requises</h1>
                </div>
                <div className="flex gap-3 justify-end">
                  <button className="px-14 py-2 items-end  flex text-[var(--white)] bg-[var(--primary-color)] ">
                    Annuler
                  </button>

                  <button className="px-10 py-2 items-end flex text-[var(--white)] bg-[var(--primary-color)] ">
                    Soumettre
                  </button>
                </div>
              </div>
              <FileInputComponent />
              <HistoDemande
                nom="Randriantsoa"
                service="Payement des impôts"
                prenom="faliarison Rapahel"
                CIN="2975"
              />
            </div>
          </div>
          <Right />
        </div>
      </div>
    </>
  );
}
