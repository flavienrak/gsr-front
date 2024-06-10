"use client";

import { UidContext } from "@/context/UidContext";
import Link from "next/link";
import { useContext } from "react";
import { useSelector } from "react-redux";

export default function Profil() {
  const { path, currentQuery } = useContext(UidContext);
  const { produits, produit } = useSelector((state) => state.produits);
  // redux => produits =>[]

  console.log(produits, produit);
  return (
    <div className="bg-slate-500 w-full h-40 flex justify-center items-center">
      profil
    </div>
  );
}
