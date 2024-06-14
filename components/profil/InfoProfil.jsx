import React from "react";
import {
  IoLogoReddit,
  IoMdCopy,
  IoMdCreate,
  IoMdExpand,
  IoMdPin,
  IoMdTrendingDown,
} from "react-icons/io";
import EditProfil from "./EditProfil";
import { useState } from "react";

export default function InfoProfil({
  Nom,
  Membre,
  Langage,
  Naissance,
  Prenom,
  Matricule,
  Parcours,
  Niveau,
}) {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
    console.log(edit);
  };

  return (
    <>
      <div className="flex w-full flex-row gap-2 justify-between">
        <div className="w-full">
          <div className="flex flex-col gap-5 p-5">
            <h1
              className="text-[var(--bg-blue)] text-xl before:contents-['']
         before:absolute relative before:-bottom-1
        before:left-16 before:w-24 before:h-[2px] before:bg-[var(--bg-blue)] "
            >
              Information personnel
            </h1>
            <div className="bg-[var(--white)] rounded-sm before:contents-[''] relative before:w-14 before:rotate-45 before:absolute before:h-14 overflow-hidden before:-top-2 before:bg-[var(--bg-blue)] before:right-[30rem]  flex flex-row items-center  ">
              <button className="bg-[var(--bg-blue)] px-3 w-1/4 py-2 text-[var(--white)]">
                Nom :
              </button>
              <p className="text-center w-3/4">{Nom}</p>
            </div>
            <div className="bg-[var(--white)] rounded-sm before:contents-[''] relative before:w-14 before:rotate-45 before:absolute before:h-14 overflow-hidden before:-top-2 before:bg-[var(--bg-blue)] before:right-[30rem]  flex flex-row items-center  ">
              <button className="bg-[var(--bg-blue)] w-1/4 px-3 py-2 text-[var(--white)]">
                Prenom :
              </button>
              <p className="text-center w-3/4">{Prenom}</p>
            </div>
            <div className="bg-[var(--white)] rounded-sm before:contents-[''] relative before:w-14 before:rotate-45 before:absolute before:h-14 overflow-hidden before:-top-2 before:bg-[var(--bg-blue)] before:right-[30rem]   flex flex-row items-center  ">
              <button className="bg-[var(--bg-blue)] w-1/4 px-3 py-2 text-[var(--white)]">
                Naissance :
              </button>
              <p className="text-center w-3/4">{Naissance}</p>
            </div>
            <div className="bg-[var(--white)] rounded-sm before:contents-[''] relative before:w-14 before:rotate-45 before:absolute before:h-14 overflow-hidden before:-top-2 before:bg-[var(--bg-blue)] before:right-[30rem]   flex flex-row items-center  ">
              <button className="bg-[var(--bg-blue)] px-3 py-2 text-[var(--white)] w-1/4">
                Matricule :
              </button>
              <p className="text-center w-3/4">{Matricule}</p>
            </div>
            <div className="bg-[var(--white)] rounded-sm before:contents-[''] relative before:w-14 before:rotate-45 before:absolute before:h-14 overflow-hidden before:-top-2 before:bg-[var(--bg-blue)] before:right-[30rem]   flex flex-row items-center  ">
              <button className="bg-[var(--bg-blue)] px-3 w-1/4 py-2 text-[var(--white)]">
                Niveau :
              </button>
              <p className="text-center w-3/4">{Niveau}</p>
            </div>
            <div className="bg-[var(--white)] rounded-sm before:contents-[''] relative before:w-14 before:rotate-45 before:absolute before:h-14 overflow-hidden before:-top-2 before:bg-[var(--bg-blue)] before:right-[30rem]   flex flex-row items-center  ">
              <button className="bg-[var(--bg-blue)] px-3 w-1/4 py-2 text-[var(--white)]">
                Parcours :
              </button>
              <p className="text-center w-3/4">{Parcours}</p>
            </div>
          </div>
          <h1
            className="text-[var(--bg-blue)] text-xl before:contents-['']
         before:absolute relative before:-bottom-1
        before:left-20 before:w-12 pl-8 before:h-[2px] before:bg-[var(--bg-blue)] "
          >
            Compétences
          </h1>
          <div className="flex gap-2 flex-col p-5">
            <div className="bg-[var(--white)] rounded-sm before:contents-[''] relative before:w-14 before:rotate-45 before:absolute before:h-14 overflow-hidden before:-top-2 before:bg-[var(--bg-blue)] before:right-[30rem]  flex flex-row items-center  ">
              <button className="bg-[var(--bg-blue)]   w-1/4 py-2 text-[var(--white)]">
                Langage :
              </button>
              <p className="text-center w-3/4">{Langage}</p>
            </div>
            <div className="bg-[var(--white)] rounded-sm before:contents-[''] relative before:w-14 before:rotate-45 before:absolute before:h-14 overflow-hidden before:-top-2 before:bg-[var(--bg-blue)] before:right-[30rem]  flex flex-row items-center  ">
              <button className="bg-[var(--bg-blue)] w-1/4 py-2 text-[var(--white)]">
                Membre de :
              </button>
              <p className="w-3/4 text-center">{Membre}</p>
            </div>
          </div>
        </div>
        <div className="flex mr-4 mt-4 gap-4 rounded-sm bg-[var(--bg-blue)] items-center w-32 h-12 px-6 ">
          <button
            onClick={handleEdit}
            className="text-[var(--white)] font-bold"
          >
            Edit
          </button>
          <IoMdCreate size={20} color="var(--white)" />
        </div>
      </div>
      {edit ? <EditProfil setEdit={setEdit} /> : ""}
    </>
  );
}
