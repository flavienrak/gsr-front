"use client";

import { BiArrowToRight } from "react-icons/bi";
import { IoIosApps } from "react-icons/io";
import style from "../../styles/HeaderLanding.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS

export function CardLanding({ icon, titre, desc }) {
  return (
    <>
      <div className=" relative">
        <div className=" absolute top-[-3px] left-[-3px] w-[101%] h-[101%]    overflow-hidden rounded-md ">
          <div
            className={`  absolute z-20 w-full h-full  ${style.animGrandCard}`}
          ></div>
          <div
            className={`  absolute z-20 w-full h-full  ${style.animGrandCard2}`}
          ></div>
        </div>
        <div className=" relative z-30  flex flex-col items-center gap-12 max-w-[22rem] bg-[var(--bg-landing)] py-8 px-4 rounded-md ">
          <div className=" relative w-20 h-20 bg-black">
            <div className=" absolute bg-[var(--bg-landing)] z-50 top-0 left-0 w-full h-full flex items-center justify-center  p-4 rounded-sm ">
              {icon}
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
          <div className=" flex flex-col items-center gap-4">
            <p className=" text-xl"> {titre}</p>
            <p className=" text-slate-400 text-center">{desc}</p>
          </div>
          <button className=" w-full relative p-2 flex items-center justify-between rounded-md border border-slate-500 overflow-hidden ">
            <p className="">Learn More</p>
            <BiArrowToRight />
            <div
              className={`${style.shadowButton} absolute top-[3rem] left-16 h-16 w-16 `}
            ></div>
          </button>
        </div>
      </div>
    </>
  );
}
export function PetitCardLanding({ icon, titre, desc }) {
  return (
    <>
      <div className=" relative  flex items-center justify-center flex-col gap-2 px-16 py-12 bg-[rgb(0,0,0,0.15)] rounded-xl shadow-sm">
        <p className=" text-2xl font-bold text-slate-100 text-center">
          {titre}
        </p>
        <p className="  text-slate-400 text-center ">{desc}</p>
        <div className=" absolute w-full h-full overflow-hidden rounded-xl ">
          <div
            className={`${style.shadowButton} absolute bottom-[18rem] right-[10rem] h-16 w-16 `}
          ></div>
        </div>
        <div className=" absolute w-full h-full overflow-hidden rounded-xl ">
          <div
            className={`${style.shadowButton} absolute top-[18rem] right-[10rem] h-16 w-16 `}
          ></div>
        </div>
        <div className=" absolute w-full h-full overflow-hidden  rounded-xl ">
          <div
            className={`${style.shadowButton} absolute top-[4rem] left-[-11rem] h-16 w-16 `}
          ></div>
        </div>
        <div className=" absolute w-full h-full overflow-hidden  rounded-xl ">
          <div
            className={`${style.shadowButton} absolute top-[4rem] right-[-11rem] h-16 w-16 `}
          ></div>
        </div>
        <div className=" absolute top-[-2.5rem] left-[41%] w-[5rem] h-[5rem] overflow-hidden rounded-full bg-[rgb(0,0,0,0.15)]  flex items-center justify-center  ">
          <div
            className={`${style.shadowButton} absolute top-[6rem] left-14 h-16 w-16 `}
          ></div>
          {icon}
        </div>
      </div>
    </>
  );
}
export function MySwiper() {
  return (
    <>
      <Swiper
        spaceBetween={50} // Adjust spacing between slides
        slidesPerView={3} // Set number of slides per view
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </>
  );
}
