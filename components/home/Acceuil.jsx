import React from "react";
import Topbar from "./Topbar";
import CreateService from "../organisme/CreateService";
import ViewService from "../organisme/ViewService";
import NotificationOrg from "../notifications/NotificationOrg";
import EditProfil from "./EditProfil";
import Profil from "./Profil";
import DemandeDesc from "../user/DemandeDesc";
import ListeDemande from "../user/ListeDemande";

export default function Acceuil() {
  return (
    <>
      {/* <CreateService /> */}
      {/* <Profil /> */}
      {/* <DemandeDesc /> */}
      {/* <ListeDemande /> */}

      {/* <EditProfil /> */}
      {/* <ViewService /> */}
      <NotificationOrg />
    </>
  );
}
