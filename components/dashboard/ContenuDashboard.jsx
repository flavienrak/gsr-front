import { IoEllipsisVertical } from "react-icons/io5";
import style from "../../styles/Dashboard.module.css";

export default function ContenuDashboard() {
  return (
    <>
      <div className=" w-full h-full p-8 flex flex-col gap-4 text-[var(--white)] ">
        <div className=" w-full h-1/3 grid grid-cols-3 gap-4">
          <div className=" relative overflow-hidden rounded-lg">
            <div className={`${style.shadow1} z-10`}></div>
            <div className={`${style.shadow2} z-10`}></div>
            <IoEllipsisVertical
              size={"1.25rem"}
              className=" absolute z-30 top-4 right-2 text-slate-200 cursor-pointer "
            />
            <div className=" absolute z-20 top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.25)] rounded-lg px-8 py-6 flex justify-between items-end ">
              <div className=" w-[9rem] h-[9rem] border-[.5rem] border-[rgb(5,95,253,0.25)] rounded-full flex items-center justify-center ">
                <p className=" text-4xl text-slate-300">80%</p>
              </div>
              <div className=" flex flex-col gap-1  items-end">
                <p className=" text-2xl text-[rgb(5,95,253)]">178+</p>
                <p className=" text-slate-300">Salves Products</p>
              </div>
            </div>
          </div>
          <div className=" relative overflow-hidden rounded-lg">
            <div className={`${style.shadow1} z-10`}></div>
            <div className={`${style.shadow2} z-10`}></div>
            <IoEllipsisVertical
              size={"1.25rem"}
              className=" absolute z-30 top-4 right-2 text-slate-200 cursor-pointer "
            />
            <div className=" absolute z-20 top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.25)] rounded-lg px-8 py-6 flex justify-between items-end ">
              <div className=" w-[9rem] h-[9rem] border-[.5rem] border-[rgb(5,95,253,0.25)] rounded-full flex items-center justify-center ">
                <p className=" text-4xl text-slate-300">80%</p>
              </div>
              <div className=" flex flex-col gap-1  items-end">
                <p className=" text-2xl text-[rgb(5,95,253)]">178+</p>
                <p className=" text-slate-300">Salves Products</p>
              </div>
            </div>
          </div>
          <div className=" relative overflow-hidden rounded-lg">
            <div className={`${style.shadow1} z-10`}></div>
            <div className={`${style.shadow2} z-10`}></div>
            <IoEllipsisVertical
              size={"1.25rem"}
              className=" absolute z-30 top-4 right-2 text-slate-200 cursor-pointer "
            />
            <div className=" absolute z-20 top-0 left-0 w-full h-full bg-[rgb(0,0,0,0.25)] rounded-lg px-8 py-6 flex justify-between items-end ">
              <div className=" w-[9rem] h-[9rem] border-[.5rem] border-[rgb(5,95,253,0.25)] rounded-full flex items-center justify-center ">
                <p className=" text-4xl text-slate-300">80%</p>
              </div>
              <div className=" flex flex-col gap-1  items-end">
                <p className=" text-2xl text-[rgb(5,95,253)]">178+</p>
                <p className=" text-slate-300">Salves Products</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-2/3 grid grid-cols-3 gap-4">
          <div className=" relative rounded-lg col-[1/3] overflow-hidden">
            <div className={`${style.shadow1} z-10`}></div>
            <div className={`${style.shadow2} z-10`}></div>
            <div className=" absolute top-0 left-0 w-full z-20 h-full bg-[rgb(0,0,0,0.15)] rounded-lg  p-8 flex flex-col gap-4 ">
              <div className=" flex flex-col gap-0">
                <p className=" text-xl">Monthy Revenue</p>
                <p className=" text-2xl">$ 15,000</p>
              </div>
              <div className=" w-full h-full bg-[rgb(0,0,0,0.15)] rounded-lg flex items-center justify-center  text-2xl font-bold">
                Histogramme
              </div>
            </div>
          </div>
          <div className=" bg-[rgb(0,60,190)] relative rounded-lg overflow-hidden">
            <div className="  absolute top-0 left-0 w-full h-full z-20  rounded-lg  p-8 flex flex-col justify-between ">
              <p className=" rounded-full py-2 px-4 uppercase text-[var(--blue-theme)] bg-[var(--white)] w-max ">
                new
              </p>
              <p className=" text-2xl">
                We have added new incovoicing templates!
              </p>
              <p className=" text-slate-300">
                New templates focused on helpig ou improve your business
              </p>
              <button className=" w-full py-3 text-black bg-[var(--white)] rounded-md ">
                Download Naw
              </button>
            </div>
            <div className=" absolute left-[7rem] top-[8rem] w-[20rem] h-[30rem] rounded-[40%]  rotate-45 bg-[rgb(5,95,253)] "></div>
            <div className=" absolute left-[13rem] top-[14rem] w-[20rem] h-[30rem] rounded-[40%]  rotate-45 bg-[rgb(7,203,253)] "></div>
          </div>
        </div>
      </div>
    </>
  );
}
