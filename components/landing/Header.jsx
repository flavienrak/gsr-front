import React from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";

export default function Header() {
  return (
    <>
      <div className=" relative w-full h-screen flex justify-center bg-[var(--bg)] text-[var(--white)] overflow-hidden p-10">
        <div className="h-full flex flex-col items-center justify-center gap-10 z-20 w-5/6">
          <div className="w-full flex items-center flex-col justify-center gap-10">
            <h1 className={`font-extrabold text-8xl bgText text-center`}>
              Decouvrir <br />
              <span className="text-8xl text-[var(--cont)]">
                {" "}
                nos services en ligne.
              </span>{" "}
            </h1>
            <p className=" text-center text-[var(--cont)] font-light opacity-70 text-lg">
              Accéeder facilement à vos
            </p>
            <div className=" flex items-center justify-center gap-6">
              <button className="bgGradient border border-[var(--primary-color)] rounded-full px-8 h-12 flex justify-center items-center text-[var(--bg)]">
                <span>Commencer</span>
                <i>
                  <MdArrowRight size={"1.5rem"} />
                </i>
              </button>
            </div>
          </div>
        </div>
        {/* <div className=" absolute top-0 left-0 w-full h-full z-10">
          <div className=" absolute top-[5rem] left-[20rem] ">
            <div
              className={` ${style.light} absolute top-0 left-0 w-[5rem] h-9 rounded-full bg-white   `}
            ></div>
            <div className={` ${style.rayon} absolute  overflow-hidden  `}>
              <div className={` ${style.shadowRayon} absolute   `}></div>
            </div>
          </div>
          <div className=" absolute top-[5rem] right-[20rem] ">
            <div
              className={` ${style.light2} absolute top-0 left-0 w-[5rem] h-9 rounded-full bg-white   `}
            ></div>
            <div className={` ${style.rayon2} absolute overflow-hidden   `}>
              <div className={` ${style.shadowRayon2} absolute   `}></div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
