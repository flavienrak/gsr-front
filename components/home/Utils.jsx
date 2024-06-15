"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight, FaEllipsis } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import logoService from "../../public/image/logopage.png";
import { BsArrowRight } from "react-icons/bs";

export function PrimaryBouton({ label, fullWidth, fontBig }) {
  return (
    <button
      className={`text-[var(--white)] h-full rounded-md py-2 px-16 bg-[var(--primary-color)] font-semibold ${
        fullWidth ? "w-full" : ""
      } ${fontBig ? "" : "text-sm"}`}
    >
      {label}
    </button>
  );
}

export function Bouton({ label, bg, color, width }) {
  return (
    <>
      <button
        className={`text-[var(--${color})] rounded-full py-2 px-12 bg-[var(--${bg})] font-bold w-${width}`}
      >
        {label}
      </button>
    </>
  );
}
export function Lien({ label, icon, url }) {
  return (
    <>
      <Link
        href={{ url }}
        className=" w-full flex items-center gap-6 px-8 py-5  lien  "
      >
        {icon}
        <p className=" capitalize">{label}</p>
      </Link>
    </>
  );
}
export function Notification({ ImageSrc, nom, service, duree }) {
  return (
    <>
      <div className=" w-full flex justify-between bg-[var(--gray)] rounded-md py-2 px-4 ">
        <div className="flex items-center gap-2">
          <div className=" relative w-[5rem] h-[5rem] rounded-full">
            <Image
              src={ImageSrc}
              alt=""
              fill
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className=" h-full flex flex-col justify-between">
            <div className=" flex flex-col">
              <p>{nom}</p>
              <p className=" text-[var(--gray-text)] ">{service}</p>
            </div>
            <p className=" text-[var(--primary-color)] ">{duree}</p>
          </div>
        </div>
        <div className=" h-full flex flex-col justify-between">
          <FaEllipsis size={"1.5rem"} className=" cursor-pointer" />
          <Link href={""} className="  ">
            <FaArrowRight className=" text-[var(--primary-color)] " />
          </Link>
        </div>
      </div>
    </>
  );
}

export function FileInputComponent() {
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setFileUrl(URL.createObjectURL(file));
    } else {
      setFileName("");
      setFileUrl("");
    }
  };

  return (
    <div>
      <label htmlFor="fileInput" className="text-sm pl-2 font-bold">
        Image CIN
      </label>
      <input
        type="file"
        id="fileInput"
        className="outline-none hidden px-2 py-2 rounded-md bg-[var(--gray)]"
        onChange={handleFileChange}
      />
      <br />
      <br />
      {fileName && (
        <div className="text-sm pl-2">
          <p>Nom du fichier : {fileName}</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            Lire le fichier
          </a>
        </div>
      )}
      <br />
      <input type="submit" value="Soumettre" />
    </div>
  );
}

export function Liste({ titre, description }) {
  return (
    <div className="flex gap-3 h-36  bg-[var(--gray)]  justify-center py-6 rounded-lg">
      <div className="w-24 h-24 rounded-lg">
        <Image
          src={logoService}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col  gap-4  ">
        <div className=" flex flex-col ">
          <p>{titre}</p>
          <p className="text-[var(--gray-text)] ">{description}</p>
        </div>
        <div className="bg-[var(--primary-color)] gap-2 rounded-lg cursor-pointer flex items-center py-2 justify-center">
          <button className="text-[var(--white)] font-semibold">
            Consulter
          </button>
          <IoMdArrowDropright size={25} color="var(--white)" />
        </div>
      </div>
    </div>
  );
}
export function CardAccueilService({
  imgOrganisme,
  imgService,
  service,
  organisme,
}) {
  return (
    <div className=" flex flex-col gap-4 bg-[var(--gray)] rounded-md overflow-hidden  ">
      <div className="relative w-full h-[12rem] rounded-full">
        <Image src={imgService} alt="" fill objectFit="cover" className="" />
      </div>
      <div className=" w-full flex ic justify-between px-4 pb-4">
        <div className=" flex items-center justify-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={imgOrganisme}
              alt=""
              fill
              objectFit="cover"
              className=""
            />
          </div>
          <div className=" flex flex-col leading-[1rem] ">
            <p className=" text-[var(--primary-color)] text-xl ">{service}</p>
            <p>{organisme}</p>
          </div>
        </div>
        <button className="  flex items-center gap-4  text-[var(--primary-color)] ">
          <p>Consulter</p>
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
export function CardAccueilDemande({
  imgOrganisme,
  imgService,
  service,
  organisme,
}) {
  return (
    <div className=" flex flex-col gap-4 bg-[var(--gray)] rounded-md overflow-hidden  ">
      <div className="relative w-full h-[18rem] rounded-full">
        <Image src={imgService} alt="" fill objectFit="cover" className="" />
      </div>
      <div className=" w-full flex ic justify-between px-4 pb-4">
        <div className=" flex items-center justify-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={imgOrganisme}
              alt=""
              fill
              objectFit="cover"
              className=""
            />
          </div>
          <div className=" flex flex-col leading-[1rem] ">
            <p className=" text-[var(--primary-color)] text-xl ">{service}</p>
            <p>{organisme}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
