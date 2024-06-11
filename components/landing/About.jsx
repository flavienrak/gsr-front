import React from "react";
import style from "../../styles/HeaderLanding.module.css";
import {
  IoIosMail,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoTwitter,
  IoMdStar,
} from "react-icons/io";

export default function About() {
  return (
    <>
      <div className=" w-full h-screen flex items-center justify-center gap-4 bg-[var(--bg)] text-white px-28">
        <div className=" relative w-full h-[25rem] overflow-hidden rounded-lg bg-[var(--bg-3)]">
          {/* <div className={`absolute w-full h-full ${style.squareAbout} `}></div>
          <div
            className={`absolute w-full h-full ${style.squareAbout2} `}
          ></div> */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-8 px-8 py-6 justify-center ">
            <div className=" flex flex-col justify-end gap-4 ">
              <div className="flex items-center gap-2">
                <IoMdStar
                  size={"1.75rem"}
                  className=" text-[var(--primary-color)] "
                />
                <IoMdStar
                  size={"1.75rem"}
                  className=" text-[var(--primary-color)] "
                />
                <IoMdStar
                  size={"1.75rem"}
                  className=" text-[var(--primary-color)] "
                />
                <IoMdStar
                  size={"1.75rem"}
                  className=" text-[var(--primary-color)] "
                />
                <p>4.7</p>
              </div>
              <div>
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
            <div className=" w-full flex items-center gap-8">
              <div className=" relative w-10 h-10 rounded-full bg-[var(--bg)] p-2 flex justify-center items-center">
                <i>
                  <IoLogoGithub size={"1.5rem"} />
                </i>
              </div>
              <div className=" relative w-10 h-10 rounded-full bg-[var(--bg)] p-2 flex justify-center items-center">
                <i>
                  <IoLogoFacebook size={"1.5rem"} />
                </i>
              </div>
              <div className=" relative w-10 h-10 rounded-full bg-[var(--bg)] p-2 flex justify-center items-center">
                <i>
                  <IoLogoTwitter size={"1.5rem"} />
                </i>
              </div>
              <div className=" relative w-10 h-10 rounded-full bg-[var(--bg)] p-2 flex justify-center items-center">
                <i>
                  <IoIosMail size={"1.5rem"} />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
