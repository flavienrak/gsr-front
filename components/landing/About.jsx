import React from "react";
import style from "../../styles/HeaderLanding.module.css";
import {
  IoIosMail,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoTwitter,
  IoMdStar,
} from "react-icons/io";
// import { MySwiper } from "./UtilsLanding";

export default function About() {
  return (
    <>
      <div className=" w-full h-screen flex items-center justify-center gap-4 bg-[var(--bg-landing)] text-white ">
        <div className=" relative w-[43rem] h-[25rem] overflow-hidden rounded-lg ">
          <div className={`absolute w-full h-full ${style.squareAbout} `}></div>
          <div
            className={`absolute w-full h-full ${style.squareAbout2} `}
          ></div>
          <div className=" absolute top-0 left-0 w-full h-full flex flex-col gap-4 bg-[rgb(0,0,0,0.5)] backdrop-blur-[3px] px-8 py-6 ">
            <div className=" flex items-center gap-4">
              <div className=" w-36 h-36 rounded-lg bg-[rgb(255,255,255,0.25)] "></div>
              <div className=" flex flex-col h-full justify-end  gap-1 ">
                <p className=" text-xl">4.7</p>
                <div className=" flex items-center gap-2">
                  <IoMdStar
                    size={"1.75rem"}
                    className=" text-[var(--blue-theme)] "
                  />
                  <IoMdStar
                    size={"1.75rem"}
                    className=" text-[var(--blue-theme)] "
                  />
                  <IoMdStar
                    size={"1.75rem"}
                    className=" text-[var(--blue-theme)] "
                  />
                  <IoMdStar
                    size={"1.75rem"}
                    className=" text-[var(--blue-theme)] "
                  />
                </div>
                <p className=" text-4xl">Lionel socrate</p>
                <p className=" text-3xl">Developpeur Frontend</p>
              </div>
            </div>
            <div className=" text-slate-400 max-w-[37rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nulla ullam nisi ipsa aperiam dolorum quaerat iusto
              magnam at tempore. Commodi vitae nam neque odio soluta libero
              deleniti modi? Aliquid?
            </div>
            <div className=" w-full flex items-center justify-center gap-8">
              <div className=" relative w-20 h-20 bg-black">
                <div className=" absolute bg-[var(--bg-landing)] z-50 top-0 left-0 w-full h-full flex items-center justify-center  p-4 rounded-sm ">
                  <IoLogoGithub size={"2.5rem"} />
                </div>
                <div className=" absolute top-[-2px] left-[-2px] w-[105%] h-[105%] rounded-sm overflow-hidden ">
                  <div
                    className={`  absolute z-40 w-full h-full  ${style.animPetitCard}`}
                  ></div>
                  <div
                    className={`  absolute z-40 w-full h-full  ${style.animPetitCard2}`}
                  ></div>
                </div>
              </div>
              <div className=" relative w-20 h-20 bg-black">
                <div className=" absolute bg-[var(--bg-landing)] z-50 top-0 left-0 w-full h-full flex items-center justify-center  p-4 rounded-sm ">
                  <IoLogoFacebook size={"2.5rem"} />
                </div>
                <div className=" absolute top-[-2px] left-[-2px] w-[105%] h-[105%] rounded-sm overflow-hidden ">
                  <div
                    className={`  absolute z-40 w-full h-full  ${style.animPetitCard}`}
                  ></div>
                  <div
                    className={`  absolute z-40 w-full h-full  ${style.animPetitCard2}`}
                  ></div>
                </div>
              </div>
              <div className=" relative w-20 h-20 bg-black">
                <div className=" absolute bg-[var(--bg-landing)] z-50 top-0 left-0 w-full h-full flex items-center justify-center  p-4 rounded-sm ">
                  <IoLogoTwitter size={"2.5rem"} />
                </div>
                <div className=" absolute top-[-2px] left-[-2px] w-[105%] h-[105%] rounded-sm overflow-hidden ">
                  <div
                    className={`  absolute z-40 w-full h-full  ${style.animPetitCard}`}
                  ></div>
                  <div
                    className={`  absolute z-40 w-full h-full  ${style.animPetitCard2}`}
                  ></div>
                </div>
              </div>
              <div className=" relative w-20 h-20 bg-black">
                <div className=" absolute bg-[var(--bg-landing)] z-50 top-0 left-0 w-full h-full flex items-center justify-center  p-4 rounded-sm ">
                  <IoIosMail size={"2.5rem"} />
                </div>
                <div className=" absolute top-[-2px] left-[-2px] w-[105%] h-[105%] rounded-sm overflow-hidden ">
                  <div
                    className={`  absolute z-40 w-full h-full  ${style.animPetitCard}`}
                  ></div>
                  <div
                    className={`  absolute z-40 w-full h-full  ${style.animPetitCard2}`}
                  ></div>
                </div>
              </div>
            </div>
            <div className=" w-full flex items-center justify-between">
              <p className=" text-slate-400">
                Cogito hergo sum{" "}
                <span className=" text-[var(--blue-theme)] ">Lionel</span>
              </p>
              <button className="">Reading More</button>
            </div>
          </div>
        </div>
        {/* <MySwiper /> */}
      </div>
    </>
  );
}
