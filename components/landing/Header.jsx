import React from "react";
import style from "../../styles/HeaderLanding.module.css";
import AnimationStar from "./AnimationStar";

export default function Header() {
  return (
    <>
      <div className=" relative w-full h-screen flex items-center justify-center bg-[var(--bg-landing)] text-[var(--white)] overflow-hidden ">
        <AnimationStar />
        <AnimationStar />
        <div className=" absolute top-0 left-0 w-full h-full flex items-center flex-col justify-center px-44 gap-6 z-20  ">
          <h1 className={`${style.titre} text-[6rem] leading-[7rem] `}>
            Leverage the power <br /> of AI for Linkedin
          </h1>
          <p className=" text-center text-slate-400 text-[1.15rem] ">
            Create betterLinkedin content ,schedule your posts at the right
            time. <br />
            bulid new relationships and monitor all your results
          </p>
          <div className=" flex items-center justify-center gap-6">
            <button className=" relative py-1.5 px-8 rounded-full border border-slate-500 overflow-hidden ">
              Se Connecter
              <div
                className={`${style.shadowButton} absolute top-[3rem] left-16 h-16 w-16 `}
              ></div>
            </button>
            <button
              className={` py-1.5 px-12 rounded-full ${style.buttonSignUp} overflow-hidden border border-transparent `}
            >
              <div
                className={`${style.shadowButton} absolute top-[3rem] left-16 h-16 w-16 `}
              ></div>
              S'inscrire
            </button>
          </div>
        </div>
        <div className=" absolute top-0 left-0 w-full h-full z-10">
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
        </div>
      </div>
    </>
  );
}
