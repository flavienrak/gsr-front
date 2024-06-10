"use client";

import { fetchProduitsInfos } from "@/redux/slices/produitsSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      <div className="bg-green-500 w-full h-40 flex justify-center items-center">
        Home
      </div>
    </>
  );
}
