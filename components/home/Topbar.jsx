import Image from "next/image";
import { PrimaryBouton } from "./Utils";
import { LuSearch } from "react-icons/lu";

export default function Topbar() {
  return (
    <>
      <div className="w-full flex items-center justify-between bg-[var(--white)] py-3">
        <div className=" flex items-center gap-4">
          <div className="relative h-8 w-8">
            <Image src={"/images/logo.png"} fill alt="" objectFit={"contain"} />
          </div>
          <h1 className="font-bold text-xl">
            <span className={"text-xl text-[var(--secondary-color)]"}>
              Citizen
            </span>
            <span className={"text-xl text-[var(--primary-color)]"}>
              Connect
            </span>
          </h1>
        </div>
        <div className="relative flex items-center">
          <input
            type="search"
            className="outline-none py-2 px-10 bg-[var(--color-light)] placeholder:text-[var(--color-gray)] w-[30vw] rounded-full font-light"
            placeholder="Rechercher..."
          />
          <i className={"text-[var(--color-gray)] absolute left-3"}>
            <LuSearch size={"1.15rem"} />
          </i>
        </div>
        <div className="flex gap-2 items-center">
          <PrimaryBouton label={"Créer"} />
          {/* <div className="relative h-8 w-8 rounded-full bg-[var(--color-light)]">
            <Image
              src={"/images/girl1.png"}
              alt=""
              fill
              objectFit="cover"
              className={"rounded-full"}
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
