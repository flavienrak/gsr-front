import React from "react";
import Topbar from "./Topbar";
import CreateService from "../organisme/CreateService";
import ViewService from "../organisme/ViewService";
import NotificationOrg from "../notifications/NotificationOrg";
import EditProfil from "./EditProfil";
import Profil from "./Profil";
import DemandeDesc from "../user/DemandeDesc";
import ListeDemande from "../user/ListeDemande";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { CardAccueilDemande, CardAccueilService } from "./Utils";

export default function Acceuil() {
  return (
    <>
      {/* <CreateService /> */}
      {/* <Profil /> */}
      {/* <DemandeDesc /> */}
      {/* <ListeDemande /> */}

      {/* <EditProfil /> */}
      {/* <ViewService /> */}
      {/* <NotificationOrg /> */}
      <div className=" p-10 w-full h-full bg-[var(--white)] flex flex-col gap-8 rounded-md ">
        <div className=" flex flex-col gap-2">
          <p className="text-4xl font-bold">Service disponibles</p>
          <p>Les services disponibles dans notre plateforme </p>
          <div className=" w-full  grid grid-cols-2 gap-4">
            <CardAccueilService
              imgOrganisme={"/images/commune.jpg"}
              imgService={"/images/acteNaissance.jpg"}
              organisme={"Commune Finarantsoa"}
              service={"Acte de naissnce"}
            />
            <CardAccueilService
              imgOrganisme={"/images/github.png"}
              imgService={"/images/paimentImpot.jpg"}
              organisme={"Commune Finarantsoa"}
              service={"Payement d'impot"}
            />
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <p className="text-4xl font-bold">Demandes disponibles</p>
          <p>
            Voici quelques demander qu'on peut demander dans les services
            disponibles
          </p>
          <div className=" w-full  grid grid-cols-2  gap-4">
            <CardAccueilService
              imgOrganisme={"/images/github.png"}
              imgService={"/images/acteNaissance.jpg"}
              organisme={"Commune Finarantsoa"}
              service={" Acte de naissance"}
            />
            <CardAccueilService
              imgOrganisme={"/images/github.png"}
              imgService={"/images/paimentImpot.jpg"}
              organisme={"Commune Finarantsoa"}
              service={"Payement d'impot"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
