import Image from "next/image";
import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { PiMetaLogo } from "react-icons/pi";
import boy from "../../public/images/boy.png";

export default function SecondPage() {
  return (
    <>
      <div className=" w-full h-[100vh] flex px-16 items-center justify-center bg-[var(--white)] ">
        <div className=" flex flex-col gap-8 w-1/2">
          <h1 className=" font-extrabold text-6xl text-[var(--cont)]   ">
            Falicitez à communiquer avec{" "}
            <span className=" font-extrabold text-7xl bgText ">Infinity</span>
          </h1>
          <p className=" max-w-full">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo modi
            explicabo sapiente laudantium quidem quia veritatis est similique,
            unde nisi, alias odio voluptatibus molestias natus earum deleniti
            esse repellendus beatae.
          </p>

          <div className=" flex items-center gap-8">
            <div className=" flex items-center gap-2">
              <div className=" flex items-center justify-center w-12 h-12 rounded-full bg-[rgb(255,173,0)] ">
                <IoMdStarOutline size={"1.5rem"} className=" text-white" />
              </div>
              <div className=" flex flex-col">
                <p className=" text-xl ">4.6</p>
                <p className=" text-slate-400">Overall Rating</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className=" flex items-center justify-center w-12 h-12 rounded-full bg-[rgb(64,191,246)]  ">
                <IoMdStarOutline size={"1.5rem"} className=" text-white" />
              </div>
              <div className=" flex flex-col">
                <p className=" text-xl ">8.8M+</p>
                <p className=" text-slate-400 ">Students</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className=" flex items-center justify-center w-12 h-12 rounded-full bg-[rgb(255,120,143)] ">
                <IoMdStarOutline size={"1.5rem"} className=" text-white" />
              </div>
              <div className=" flex flex-col">
                <p className=" text-xl ">4.6</p>
                <p className=" text-slate-400 ">Overall Rating</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" w-[15rem] bg-slate-200 h-1 rounded-lg relative">
              <div className=" absolute w-1/2 top-0 left-0 h-full bg-slate-400 rounded-lg "></div>
            </div>
            <div className="flex gap-2 items-center">
              <p>Countdown</p>
              <span className=" h-6 w-[1px] rounded-lg bg-slate-400 "></span>
              <div className=" flex items-center gap-1">
                <PiMetaLogo size={"1.35rem"} />
                <p className=" text-slate-400">Meta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" relative">
            <Image src={boy} alt="boy" width={540} />
          </div>
        </div>
      </div>
    </>
  );
}
