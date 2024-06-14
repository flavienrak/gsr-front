"use client";

import { UidContext } from "@/context/UidContext";
import Image from "next/image";
import Link from "next/link";
import pdp from "../../public/image/pdpprofil.png";
import { useContext, useState, useEffect } from "react";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoMdCamera,
  IoMdLocate,
  IoMdMailOpen,
  IoMdPhonePortrait,
} from "react-icons/io";
import { useSelector } from "react-redux";
import InfoProfil from "./InfoProfil";

export default function Profil() {
  const { path, currentQuery } = useContext(UidContext);
  const { produits, produit } = useSelector((state) => state.produits);
  // redux => produits =>[]
  const items = ["Amis", "Publications", "Informations", "Groupes"];
  const [click1, setClick1] = useState(new Array(items.length).fill(false));
  const handleMenuClick = (index) => {
    console.log("faly");
    const updatedClick = new Array(items.length).fill(false);
    updatedClick[index] = true;
    setClick1(updatedClick);
    console.log(click1);
  };
  const sans_border = {
    borderBottom: "2px solid transparent",
  };
  const border = {
    color: "#4ae",
    borderBottom: "2px solid #4ae",
  };

  useEffect(() => {
    const initialClick = new Array(items.length).fill(false);
    initialClick[0] = true;
    setClick1(initialClick);
  }, [items.length]);

  console.log(produits, produit);
  return (
    <>
      <div className="flex gap-4 mt-2">
        <div className=" w-1/3 py-8 flex bg-[var(--bg-transparent)] items-center justify-center flex-col">
          <div className=" relative   w-[20rem] h-[18rem] rounded-md shadow-md ">
            <input type="file" id="image" className=" hidden" />
            <Image src={pdp} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 h-9 w-9 flex items-center justify-center bg-[rgb(255,255,255,0.25)] rounded-md shadow-xl cursor-pointer ">
              <IoMdCamera size={"1.5rem"} className=" text-white " />
            </div>
          </div>
          <div className=" w-full   flex flex-col items-center gap-6">
            <div className=" w-full flex  gap-1 flex-col">
              <p className=" uppercase text-white text-xl pl-8 py-4">contact</p>
              <span className=" w-full h-[1px] bg-white"></span>
            </div>
            <div className=" flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <IoMdLocate size={"1.25rem"} className="text-pink-500" />
                <p className=" text-white ">Fianarantsoa- Madagascar</p>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoFacebook size={"1.5rem"} className=" text-blue-700 " />
                <p className=" text-white ">
                  Ramamonjosia Toavina Andrandraina
                </p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdMailOpen size={"1.25rem"} className=" text-orange-700 " />
                <p className=" text-white">lionelsocrate7@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <IoMdPhonePortrait
                  size={"1.25rem"}
                  className=" text-violet-500 "
                />
                <p className=" text-white ">+261 33 78 546 95</p>
              </div>
              <div className="flex items-center gap-2">
                <IoLogoGithub size={"1.5rem"} className=" text-blue-500 " />
                <p className=" text-white ">Lionel Socrate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4 bg-[var(--bg-transparent)]">
          <div className="flex p-2 ">
            {items.map((item, index) => (
              <p
                onClick={() => handleMenuClick(index)}
                style={click1[index] === true ? border : sans_border}
                className="text-white text-center w-1/4 cursor-pointer border-b-2 border-transparent"
                key={index}
              >
                {item}
              </p>
            ))}
          </div>
          {click1[2] === true ? (
            <InfoProfil
              Nom="RANDRIANTSOA"
              Prenom="Faliarion Raphael"
              Naissance="27 Fevrier 2003"
              Langage="Python"
              Membre="DSA"
              Parcours="ASR"
              Niveau="L2"
              Matricule="2975"
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
