"use client";

import Navbar from "../home/Navbar";
import Topbar from "../home/Topbar";

export default function CreateService() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col">
        <Topbar />
        <div className=" bg-[var(--gray)] w-full h-full flex  gap-8 px-12 py-8 ">
          <Navbar />
        </div>
      </div>
    </>
  );
}
