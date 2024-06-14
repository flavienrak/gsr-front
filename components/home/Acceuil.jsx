import React from "react";
import Topbar from "./Topbar";
import CreateService from "../organisme/CreateService";
import ViewService from "../organisme/ViewService";
import NotificationOrg from "../notifications/NotificationOrg";

export default function Acceuil() {
  return (
    <>
      {/* <CreateService /> */}
      <ViewService />
      {/* <NotificationOrg /> */}
    </>
  );
}
