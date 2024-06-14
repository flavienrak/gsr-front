import { BiArrowToRight } from "react-icons/bi";

export function CardLanding({ icon, titre, desc }) {
  return (
    <>
      <div className=" relative">
        {/* <div className=" absolute top-[-3px] left-[-3px] w-[101%] h-[101%] overflow-hidden rounded-md ">
          <div
            className={`absolute z-20 w-full h-full  ${style.animGrandCard}`}
          ></div>
          <div
            className={`absolute z-20 w-full h-full  ${style.animGrandCard2}`}
          ></div>
        </div> */}
        <div className=" relative z-30  flex flex-col items-center gap-12 max-w-[22rem] bg-[var(--bg-1)] py-8 px-4 rounded-md ">
          <div className=" relative w-20 h-20 bg-black">
            <div className=" absolute bg-[var(--bg-landing)] z-50 top-0 left-0 w-full h-full flex items-center justify-center  p-4 rounded-sm ">
              {icon}
            </div>
          </div>
          <div className=" flex flex-col items-center gap-4">
            <p className=" text-xl"> {titre}</p>
            <p className=" text-slate-400 text-center">{desc}</p>
          </div>
          <button className=" w-full relative h-10 px-4 flex items-center justify-between rounded-md border border-[var(--bg-2)] overflow-hidden ">
            <p className="text-[var(--white)]">Learn More</p>
            <i className="text-[var(--white)]">
              <BiArrowToRight size={"1.5rem"} />
            </i>
          </button>
        </div>
      </div>
    </>
  );
}

export function PetitCardLanding({ icon, titre, desc }) {
  return (
    <>
      <div className=" relative  flex items-center justify-center flex-col gap-4 px-16 py-14 rounded-xl">
        <p className=" text-2xl font-bold text-slate-100 text-center">
          {titre}
        </p>
        <p className="  text-slate-400 text-center font-light">{desc}</p>
        <div className=" absolute w-full h-full overflow-hidden rounded-xl ">
          <div
            className={`absolute bottom-[18rem] right-[10rem] h-16 w-16 `}
          ></div>
        </div>
        <div className=" absolute w-full h-full overflow-hidden rounded-xl ">
          <div
            className={`absolute top-[18rem] right-[10rem] h-16 w-16 `}
          ></div>
        </div>
        <div className=" absolute w-full h-full overflow-hidden  rounded-xl ">
          <div className={`absolute top-[4rem] left-[-11rem] h-16 w-16 `}></div>
        </div>
        <div className=" absolute w-full h-full overflow-hidden  rounded-xl ">
          <div
            className={`absolute top-[4rem] right-[-11rem] h-16 w-16 `}
          ></div>
        </div>
        <div className=" absolute top-[-2.5rem] left-[41%] w-[5rem] h-[5rem] overflow-hidden rounded-full bg-[var(--bg-3)]  flex items-center justify-center text-[var(--primary-color)] ">
          {icon}
        </div>
      </div>
    </>
  );
}

export function MiniCard({ titre, work, person, color }) {
  return (
    <div
      className={` flex items-center flex-col gap-8 rounded-xl  shadow-sm relative py-8 px-4 min-w-[23rem] bg-white overflow-hidden`}
    >
      {/* <div className={` absolute shadow${color}1`}></div>
      <div className={` absolute shadow${color}2`}></div> */}
      <p className={`text-2xl uppercase text-[var(--${color})]`}>{titre}</p>

      <div
        className={` w-[20rem] h-[14rem] bg1  rounded-md flex items-center justify-center `}
      >
        {/* <IoPeople size={"4rem"} className={` text-[var(--${color})]`} /> */}
      </div>

      <div className=" flex flex-col items-center gap-1">
        <p className={`text-3xl  text-[var(--${color})]`}>{work}</p>
        <p className=" text-xl text-slate-300">{person}</p>
      </div>
    </div>
  );
}
