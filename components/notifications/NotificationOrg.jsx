"use client";

import Image from "next/image";
import Navbar from "../home/Navbar";
import Right from "../home/Right";
import Topbar from "../home/Topbar";
import { FaEllipsis } from "react-icons/fa6";
import { Notification } from "../home/Utils";

export default function NotificationOrg() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden">
        <Topbar />
        <div className=" bg-[var(--gray)] w-full h-full flex  gap-8 px-8 py-8 ">
          <Navbar />
          <div className=" w-3/5 flex bg-[var(--white)] py-2 px-4 rounded-md  flex-col gap-4 overflow-y-scroll">
            <p className=" text-2xl">Notifications</p>
            <div className=" w-full flex flex-col gap-4">
              <Notification
                ImageSrc={"/images/github.png"}
                nom={"SOLOFONOTOAVINDRAINY Hery Nasandratra"}
                service={"demande d'acte de naissance"}
                duree={"il y a 2 heures"}
              />
              <Notification
                ImageSrc={"/images/github.png"}
                nom={"SOLOFONOTOAVINDRAINY Hery Nasandratra"}
                service={"demande d'acte de naissance"}
                duree={"il y a 2 heures"}
              />
              <Notification
                ImageSrc={"/images/github.png"}
                nom={"SOLOFONOTOAVINDRAINY Hery Nasandratra"}
                service={"demande d'acte de naissance"}
                duree={"il y a 2 heures"}
              />
              <Notification
                ImageSrc={"/images/github.png"}
                nom={"SOLOFONOTOAVINDRAINY Hery Nasandratra"}
                service={"demande d'acte de naissance"}
                duree={"il y a 2 heures"}
              />
            </div>
          </div>
          <Right />
        </div>
      </div>
    </>
  );
}
