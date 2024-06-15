import Image from "next/image";
import { BiArrowToTop, BiCopyright, BiSolidArrowToTop } from "react-icons/bi";
import { FaArrowUp, FaArrowsDownToPeople } from "react-icons/fa6";
import { IoLogoFacebook, IoLogoGithub, IoLogoTwitter } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div className=" w-full  pt-8 flex flex-col gap-12 text-[var(--white)] bg-[var(--dark)] ">
        <div className=" w-full px-[6rem] flex items-center justify-between">
          <div className=" flex flex-col gap-8">
            <div className=" flex items-center gap-2">
              <Image
                src={"/image/logoService.jpg"}
                alt="logo"
                width={20}
                height={10}
              />
              <p className=" text-xl">NomApp</p>
            </div>
            <div className=" flex items-center gap-4">
              <IoLogoFacebook
                size={"2.5rem"}
                className=" text-[var(--white)] "
              />
              <IoLogoGithub size={"2.5rem"} className=" text-[var(--white)] " />
              <IoLogoTwitter
                size={"2.5rem"}
                className=" text-[var(--white)] "
              />
            </div>
            <p className=" max-w-[25rem] ">
              Merci d'avoir visiter le plateforme , On vous offre toujours la
              meilleur possibilité pour faciliter à utiliser les services
              publics gouvernementaux{" "}
            </p>
          </div>
          <div className=" flex gap-16">
            <div className="  flex flex-col gap-3">
              <p className=" text-xl">Service</p>
              <div className=" flex flex-col gap-1">
                <p className=" gray-text2">Etat civil</p>
                <p className=" gray-text2">Payement d'impot</p>
                <p className=" gray-text2">Securité</p>
              </div>
            </div>
            <div className="  flex flex-col gap-3">
              <p className=" text-xl">Developer</p>
              <div className=" flex flex-col gap-1">
                <p className=" gray-text2">Integration </p>
                <p className=" gray-text2">API & Doc</p>
                <p className=" gray-text2">Products</p>
              </div>
            </div>
            <div className="  flex flex-col gap-3">
              <p className=" text-xl">Ressources</p>
              <div className=" flex flex-col gap-1">
                <p className=" gray-text2">Package</p>
                <p className=" gray-text2">Assets </p>
                <p className=" gray-text2">Token</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full  px-16 py-6 flex items-center justify-between bg-[rgb(0,0,0,0.25)] ">
          <div className="  flex items-center gap-8">
            <div className=" flex items-center gap-1">
              <p className=" text-[rgb(255,255,255,0.5)] ">copyRight</p>
              <BiCopyright />
              <p>DevHunt 2024</p>
            </div>
            <div className=" flex items-center gap-2">
              <p className=" text-[rgb(255,255,255,0.5)] ">Devellopée Par</p>
              <p>Gsr</p>
            </div>
            <div className=" flex items-center gap-2">
              <p className=" text-[rgb(255,255,255,0.5)] ">Designé Par</p>
              <p>Flavien Rak</p>
            </div>
          </div>
          <div className=" w-10  h-8 flex items-center justify-center  rounded-sm bg-[var(--primary-color)] cursor-pointer ">
            <FaArrowUp className="" size={"1.25rem"} />
          </div>
        </div>
      </div>
    </>
  );
}
