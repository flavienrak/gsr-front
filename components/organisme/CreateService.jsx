"use client";

import Link from "next/link";
import Navbar from "../home/Navbar";
import Topbar from "../home/Topbar";
import Bouton from "../home/Utils";
import Right from "../home/Right";
import { Input } from "../utils/Utils";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import ConfirmationPopup from "../payement/PayementPopup";
import Rendezvous from "../payement/Rendezvous";

export default function CreateService() {
  const [nomService, setNomService] = useState("");
  const [description, setDescription] = useState("");
  const [tarif, setTarif] = useState("");
  const [duree, setDuree] = useState("");
  const [designInfo, setDesignInfo] = useState("");
  const [typeInfo, setTypeInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleAdd = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden">
        {/* <ConfirmationPopup /> */}
        <Rendezvous />
        <Topbar />
        <div className=" bg-[var(--gray)] w-full h-full flex  gap-8 px-8 py-8 ">
          <Navbar />
          <div className=" w-3/5 flex  flex-col gap-4 overflow-y-scroll">
            <form
              className=" w-full  flex flex-col  gap-4  px-8 py-8 bg-[var(--white)] rounded-xl "
              onSubmit={handleSubmit}
            >
              <p className=" uppercase text-2xl   ">création de service</p>
              <div className=" w-full flex items-center gap-8 ">
                <div className=" min-w-[15rem] h-[15rem] bg-[var(--gray)] rounded-xl  "></div>
                <div className=" w-full flex flex-col gap-4">
                  <div className=" w-full flex flex-col gap-1">
                    <p className=" px-4">Nom du service</p>
                    <input
                      id="nomService"
                      type="text"
                      className="bg-[var(--gray)] rounded-md py-2 px-4 outline-none  w-full"
                      name="nomService"
                      onChange={(e) => setNomService(e.target.value)}
                      placeholder="nom du service"
                    />
                  </div>
                  <div className=" w-full flex flex-col gap-1">
                    <p className=" px-4">Description</p>

                    <textarea
                      id="description"
                      name="description"
                      type="text"
                      className=" bg-[var(--gray)] rounded-md py-2 px-4 outline-none  w-full h-[8rem] "
                      placeholder="description du service "
                    />
                  </div>
                </div>
              </div>
              <div className=" w-full flex items-center gap-8">
                <div className=" w-1/2 flex flex-col gap-1">
                  <p className=" px-4">Tarif</p>
                  <input
                    id="tarif"
                    type="text"
                    className="bg-[var(--gray)] rounded-md py-2 px-4 outline-none  w-full"
                    name="tarif"
                    onChange={(e) => setTarif(e.target.value)}
                    placeholder="tarif"
                  />
                </div>
                <div className=" w-1/2 flex flex-col gap-1">
                  <p className=" px-4">Durée</p>
                  <input
                    id="duree"
                    type="text"
                    className="bg-[var(--gray)] rounded-md py-2 px-4 outline-none  w-full"
                    name="duree"
                    placeholder=" duréee du service"
                    onChange={(e) => setDuree(e.target.value)}
                  />
                </div>
              </div>

              <div className=" w-full flex flex-col gap-4">
                <form className=" w-full  flex flex-col gap-4 px-8 py-6 bg-[var(--white)] rounded-xl ">
                  <p className=" uppercase text-xl ">informations requises</p>
                  <button
                    className=" flex items-center gap-4 text-[var(--white)] py-2 px-8 bg-[var(--primary-color)] w-max"
                    onClick={handleAdd}
                  >
                    <IoMdAddCircle size={"1.5rem"} />
                    <p>Ajouter</p>
                  </button>
                  <div className=" w-full flex items-center gap-8">
                    <div className=" w-1/2 flex flex-col gap-1">
                      <p className=" px-4">Designation d'information</p>
                      <input
                        id="designInfo"
                        type="text"
                        className="bg-[var(--gray)] rounded-md py-2 px-4 outline-none  w-full"
                        name="designInfo"
                        placeholder=" designation de l'information"
                        onChange={(e) => setDesignInfo(e.target.value)}
                      />
                    </div>
                    <div className=" w-1/2 flex flex-col gap-1">
                      <p className=" px-4">Type d'information</p>
                      <select
                        name="typeInfo"
                        id="typeInfo"
                        className="bg-[var(--gray)] rounded-md py-2 px-4 outline-none  w-full"
                        onChange={(e) => setTypeInfo(e.target.value)}
                      >
                        <option value="Text">Text</option>
                        <option value="Numéro telephone">
                          Numéro telephone
                        </option>
                        <option value="CIN">CIN</option>
                        <option value="Fichier">Fichier</option>
                        <option value="Date">Date</option>
                      </select>
                    </div>
                  </div>
                </form>
                <div className=" w-full  flex flex-col gap-4 px-8  bg-[var(--white)] rounded-xl ">
                  <p className=" uppercase text-xl ">Vos informations</p>
                  <div className=" w-full flex flex-col listInfo">
                    <div className=" w-full grid grid-cols-3 items-center justify-between bg-[var(--gray)]  px-12 py-2 ">
                      <p className=" text-center">Nom</p>
                      <p className=" text-center">Text</p>
                      <div className=" flex items-center justify-center">
                        <MdDeleteOutline
                          className=" text-[var(--red-theme)]  "
                          size={"1.5rem"}
                        />
                      </div>
                    </div>
                    <div className=" w-full grid grid-cols-3 items-center justify-between   px-12 py-2 ">
                      <p className=" text-center">Date de Naissance</p>
                      <p className=" text-center">Text</p>
                      <div className=" flex items-center justify-center">
                        <MdDeleteOutline
                          className=" text-[var(--red-theme)]  "
                          size={"1.5rem"}
                        />
                      </div>
                    </div>
                    <div className=" w-full grid grid-cols-3 items-center justify-between bg-[var(--gray)]  px-12 py-2 ">
                      <p className=" text-center">Nom</p>
                      <p className=" text-center">Text</p>
                      <div className=" flex items-center justify-center">
                        <MdDeleteOutline
                          className=" text-[var(--red-theme)]  "
                          size={"1.5rem"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-full flex items-center gap-8  justify-end">
                <Link
                  href={""}
                  className="  py-2 px-16  text-[var(--white)] bg-[var(--blue-theme)] rounded-md "
                >
                  Annuler
                </Link>
                <button
                  className=" py-2 px-16  text-[var(--white)] bg-[var(--primary-color)] rounded-md "
                  type="submit"
                >
                  Créer
                </button>
              </div>
            </form>
          </div>
          <Right />
        </div>
      </div>
    </>
  );
}
