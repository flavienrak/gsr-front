"use client";

import Image from "next/image";
import Link from "next/link";

import { useContext } from "react";
import { PrimaryBouton } from "./Utils";
import { VscBell } from "react-icons/vsc";
import { UidContext } from "@/context/UidContext";
import { HiOutlinePresentationChartBar } from "react-icons/hi2";
import { IoBagAddOutline } from "react-icons/io5";
import { BsBookmarkStar, BsHouse } from "react-icons/bs";

const links = [
  {
    label: "Accueil",
    path: "accueil",
    icon: <BsHouse size={"1.25rem"} />,
  },
  {
    label: "Nouveau",
    path: "nouveau",
    icon: <BsBookmarkStar size={"1.25rem"} />,
  },
  {
    label: "Services",
    path: "services",
    icon: <HiOutlinePresentationChartBar size={"1.25rem"} />,
  },
  {
    label: "Demandes",
    path: "demandes",
    icon: <IoBagAddOutline size={"1.25rem"} />,
  },
  {
    label: "Notifications",
    path: "notifications",
    icon: <VscBell size={"1.25rem"} />,
  },
];

export default function Navbar() {
  const { path, currentQuery } = useContext(UidContext);

  return (
    <div className="w-full flex flex-col items-center gap-4 h-full">
      <div className="w-full flex items-center gap-4 p-4 bg-[var(--white)] rounded-xl">
        <div className="relative w-10 h-10 rounded-full">
          <Image
            src={"/images/github.png"}
            alt=""
            fill
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col w-3/5">
          <p className={"font-bold whitespace-nowrap overflow-hidden"}>
            Lionel Socrate
          </p>
          <p className="text-[var(--gray-text)] whitespace-nowrap overflow-hidden font-light text-sm">
            lionel@gmail.com
          </p>
        </div>
      </div>

      <div className="w-full flex-1 bg-[var(--white)] rounded-xl">
        {links.map((item, index) => (
          <Link
            key={item.label}
            href={{
              pathname: path,
              query: {
                path: item.path,
              },
            }}
            className={`flex gap-4 items-center w-full h-10 px-5 py-8 hover:bg-[var(--color-light)] transition-all duration-100 hover:font-semibold ${
              index === 0 ? "rounded-t-xl" : ""
            }  ${
              currentQuery.path === item.path
                ? "bg-[var(--color-light)] text-[var(--primary-color)] rounded-none hover:border-[var(--primary-color)] cursor-default border-l-4 border-[var(--primary-color)]"
                : ""
            }`}
            // ${index === links.length - 1 ? "rounded-b-xl" : ""}
          >
            <i>{item.icon}</i>
            <span className={""}>{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="w-full min-h-12">
        <PrimaryBouton label={"Créer Service"} fullWidth fontBig />
      </div>
    </div>
  );
}
