"use client";

import Navbar from "../home/Navbar";
import Right from "../home/Right";
import Topbar from "../home/Topbar";
import { Liste } from "../home/Utils";

export default function ListeDemande() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden">
        <Topbar />
        <div className=" bg-[var(--gray)] w-full h-full flex  gap-8 px-8 py-8 ">
          <Navbar />
          <div className=" w-3/5 flex bg-[var(--white)] px-4 py-4 flex-col gap-4 overflow-y-scroll">
            <div className=" w-full  grid grid-cols-2 gap-4">
              <Liste titre={"Payement d'import"} description={"disponible"} />
              <Liste titre={"Payement d'import"} description={"disponible"} />
              <Liste titre={"Payement d'import"} description={"disponible"} />
              <Liste titre={"Payement d'import"} description={"disponible"} />
              <Liste titre={"Payement d'import"} description={"disponible"} />
            </div>
          </div>
          <Right />
        </div>
      </div>
    </>
  );
}
