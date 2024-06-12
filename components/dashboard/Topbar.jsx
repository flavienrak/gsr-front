import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNotifications, IoSearchOutline } from "react-icons/io5";

export default function Topbar() {
  return (
    <>
      <div className=" w-full flex items-center justify-between bg-[rgb(0,0,0,0.5)] py-4 px-8 text-[var(--white)]  ">
        <div className=" relative">
          <input
            type="search"
            className=" outline-none  bg-[rgb(255,255,255,0.25)] py-2 px-10 rounded-full text-slate-400"
            placeholder="recherche"
          />
          <IoSearchOutline
            size={"1.35rem"}
            className=" absolute top-[.5rem] left-[.5rem] text-slate-400"
          />
        </div>
        <div className=" flex items-center gap-6">
          <div className=" relative">
            <IoMdNotificationsOutline
              size={"2.25rem"}
              className=" text-slate-200"
            />
            <div className=" absolute top-[-4px] right-[-4px] w-[1.25rem] h-[1.25rem] rounded-full flex items-center justify-center bg-[var(--blue-theme)] ">
              <p>2</p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-2">
            <div className=" w-10 h-10 rounded-full bg-slate-500"></div>
            <div className=" flex flex-col ">
              <p>Lionel Socrate</p>
              <p className=" text-xs text-slate-400">
                lionelsocrate7@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
