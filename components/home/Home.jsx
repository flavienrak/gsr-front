"use client";

import Link from "next/link";
import Accueil from "./Acceuil";

import { useContext, useState } from "react";
import { UidContext } from "@/context/UidContext";
import { isEmpty } from "@/lib/functions";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import { useDispatch } from "react-redux";
import { updatePersistInfos } from "@/redux/slices/persistSlice";
import ListeServices from "../organisme/ListeServices";

export default function Home() {
  const { currentQuery, path, verifyToken, loginOut, showLogout } =
    useContext(UidContext);
  const dispatch = useDispatch();
  const [isLoginOut, setIsLoginOut] = useState(false);

  const handleLogout = async () => {
    setIsLoginOut(true);
    await signOut();
    dispatch(updatePersistInfos({ authToken: null }));
    window.location = "/";
  };

  if (!verifyToken)
    return (
      <>
        {/* condition => true ? <Acceuil /> : <Profil /> */}
        {/* {currentQuery?.path === "profil" && isEmpty(currentQuery?.edit) ? (
          <Profil />
        ) : currentQuery?.edit === "profil" ? (
          <EditProfil />
        ) : (
          <Accueil />
        )} */}
        {/* <Link
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
        </Link> */}
        <div className="grid  w-[70%] grid-cols-3">
          <ListeServices titre="Payement des impôts" description="Disponible" />
          <ListeServices titre="Payement des impôts" description="Disponible" />
          <ListeServices titre="Payement des impôts" description="Disponible" />
        </div>
        <div></div>
        <button style={{ display: "none" }} onClick={() => loginOut(true)}>
          Logout
        </button>
        {showLogout && (
          <div className="fixed bgFixed top-0 left-0 w-full h-full flex justify-center items-center">
            <motion.div
              initial={{ y: -15 }}
              animate={{ y: 0 }}
              className="bg-[var(--bg-1)] border border-[var(--bg)] p-5 rounded-lg flex flex-col gap-5 w-64 justify-center text-center transition-all duration-100 ease-linear"
            >
              <h1 className={"text-[var(--cont)] px-2"}>
                Voulez-vous vraiement vous deconnecter ?
              </h1>
              <div className="flex gap-5">
                <button
                  onClick={() => loginOut(false)}
                  className="w-1/2 text-[var(--red)] border border-[var(--red)] rounded-lg text-sm inline-flex items-center py-2.5 justify-center overflow-hidden"
                >
                  Annuler
                </button>
                <button
                  disabled={isLoginOut}
                  onClick={handleLogout}
                  className={`w-1/2 text-[var(--white)] bg-[var(--primary-color)] rounded-lg text-sm inline-flex items-center py-2.5 justify-center overflow-hidden ${
                    isLoginOut ? "opacity-50 cursor-default" : "opacity-100"
                  }`}
                >
                  {isLoginOut ? `Deconn...` : `Confirmer`}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </>
    );
}
