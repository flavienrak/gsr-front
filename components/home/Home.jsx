"use client";

import Link from "next/link";
import Accueil from "./Accueil";
import { useContext } from "react";
import { UidContext } from "@/context/UidContext";
import Profil from "./Profil";
import EditProfil from "./EditProfil";
import { isEmpty } from "@/lib/functions";

export default function Home() {
  const { currentQuery, path } = useContext(UidContext);

  return (
    <>
      {/* condition => true ? <Acceuil /> : <Profil /> */}
      {currentQuery?.path === "profil" && isEmpty(currentQuery?.edit) ? (
        <Profil />
      ) : currentQuery?.edit === "profil" ? (
        <EditProfil />
      ) : (
        <Accueil />
      )}
      <Link
        href={{
          pathname: path,
          query: {
            path: "profil",
          },
        }}
      >
        Profil
      </Link>
      <Link
        href={{
          pathname: path,
          query: {
            path: "home",
          },
        }}
      >
        Home
      </Link>
    </>
  );
}
