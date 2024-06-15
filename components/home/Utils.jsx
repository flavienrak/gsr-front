import Image from "next/image";
import Link from "next/link";

import { FaArrowRight, FaEllipsis } from "react-icons/fa6";

export function PrimaryBouton({ label, fullWidth, fontBig }) {
  return (
    <button
      className={`text-[var(--white)] h-full rounded-md py-2 px-8 bg-[var(--primary-color)] font-semibold ${
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
