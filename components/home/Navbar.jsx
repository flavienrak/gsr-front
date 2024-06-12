"use client";
import React from "react";
import { useState, useEffect } from "react";
import pdp from "../../public/image/pdpprofil.png";
import {
  IoIosSearch,
  IoIosSpeedometer,
  IoMdFilm,
  IoMdHome,
  IoMdNotifications,
  IoMdOptions,
} from "react-icons/io";
import Image from "next/image";
import logo from "../../public/image/logo.png";
import Profil from "../profil/Profil";
const items = [
  {
    icone: <IoMdHome color="white" opacity={0.7} size={35} />,
    text: "Accueil",
  },
  {
    icone: <IoIosSpeedometer color="white" opacity={0.7} size={35} />,
    text: "Profil",
  },
  {
    icone: <IoMdOptions color="white" opacity={0.7} size={35} />,
    text: "Dashbord",
  },
  {
    icone: <IoMdFilm color="white" opacity={0.7} size={35} />,
    text: "Theme",
  },
];
export default function Navbar({ pseudo, email }) {
  const border = {
    borderLeft: "4px solid #4ae",
    transition: "all 1s ease in",
    background: "#4ae",
    color: "white",
  };
  const sans_border = {
    borderLeft: "4px solid transparent",
  };
  const [click1, setClick1] = useState(new Array(items.length).fill(false));
  const handleMenuClick = (index) => {
    console.log("faly");
    const updatedClick = new Array(items.length).fill(false);
    updatedClick[index] = true;
    setClick1(updatedClick);
    console.log(click1);
  };
  useEffect(() => {
    const initialClick = new Array(items.length).fill(false);
    initialClick[0] = true;
    setClick1(initialClick);
  }, [items.length]);

  return (
    <>
      <div className="flex w-full">
        <div>
          <div className=" flex gap-5 py-3 px-3  flex-col h-screen bg-[var(--bg-landing)]  ">
            <div className="flex  gap- py-2 items-center">
              <Image src={logo} height={60} width={60} alt="" />
              <h1 className="text-white font-bold text-2xl">Square</h1>
            </div>
            <div className="flex flex-col gap-2">
              {items.map((item, index) => (
                <div
                  onClick={() => handleMenuClick(index)}
                  style={click1[index] === true ? border : sans_border}
                  key={index}
                  className="flex cursor-pointer  w-full rounded-md pr-16 pl-4 py-2 items-center   gap-3  bg-[var(--bg-transparent)]"
                >
                  <div>{item.icone}</div>
                  <div className="text-white">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full h-screen bg-[var(--bg-landing)] box-content flex flex-col  ">
          <div className=" bg-[var(--bg-landing)] py-4 px-2  h-max flex items-center justify-between ">
            <div className="flex items-center opacity-70 pl-2 w-1/4 py-2 rounded-sm  bg-[var(--bg-transparent)]">
              <IoIosSearch color="white" size={20} />
              <input
                type="text"
                placeholder="Search"
                className=" bg-transparent text-white pl-2 outline-none  text-sm"
              />
            </div>
            <div className="flex gap-4 items-center">
              <div className="relative ">
                <IoMdNotifications color="white" opacity={0.9} size={35} />
                <div className="absolute w-4 top-0 right-0 h-4 rounded-full bg-red-600 "></div>
              </div>
              <div className="flex gap-2">
                <Image
                  src={pdp}
                  className="rounded-full w-10 h-10 object-cover"
                  alt=""
                />
                <div className=" leading-0">
                  <p className="text-white leading-0">Raphael</p>
                  <p className="text-white color-grey-200 text-[0.5rem]">
                    randriantsoafaly8@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 bg-[var(--bg-landing)]">
            {/* <Dashboard /> */}
            <Profil />
          </div>
        </div>
      </div>
    </>
  );
}
