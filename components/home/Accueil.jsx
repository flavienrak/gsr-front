"use client";

import { fetchProduitsInfos } from "@/redux/slices/produitsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../dashboard/Navbar";
import Topbar from "../dashboard/Topbar";
import ContenuAcceuil from "./ContenuAcceuil";

export default function Accueil() {
  const dispatch = useDispatch();
  const { produits, produit } = useSelector((state) => state.produits);

  console.log(produits, produit);

  const produitsInfos = [
    { id: 1, prix: 200 },
    { id: 2, prix: 150 },
  ];

  const [listProduits, setListeProduits] = useState([]);

  useEffect(() => {
    (async () => {
      // fetch
      // res = produits []
      setListeProduits(produitsInfos); // store redux

      dispatch(fetchProduitsInfos({ produits: produitsInfos }));

      // funct => produits {produits:[], produit:{value:1}} => {produits:[{ id: 1, prix: 200 }, { id: 2, prix: 150 },], produit:{value:1}}
    })();
  }, []);

  return (
    <>
      <div className=" w-full h-screen bg-[var(--bg-landing)] flex  ">
        <Navbar />
        <div className=" w-full h-full flex flex-col">
          <Topbar />
          <ContenuAcceuil />
        </div>
      </div>
    </>
  );
}
