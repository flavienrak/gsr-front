import {
  BiBookBookmark,
  BiComment,
  BiFace,
  BiFile,
  BiHeart,
  BiShare,
} from "react-icons/bi";
import {
  IoAddCircleOutline,
  IoCalendar,
  IoEllipsisHorizontal,
  IoImageOutline,
} from "react-icons/io5";

export default function ContenuAcceuil() {
  return (
    <>
      <div className=" w-full h-full overflow-hidden  p-8 flex gap-8">
        <div className=" w-2/3 flex flex-col gap-4 max-h-full overflow-y-scroll">
          <div className=" w-full py-2 flex flex-col gap-4 rounded-lg bg-white">
            <p className=" px-8  text-xl">Post something</p>
            <div className=" w-full h-1 bg-slate-500"></div>
            <div className=" w-full flex items-center justify-between px-8 ">
              <div className=" flex items-center gap-4  ">
                <div className=" w-12 h-12 rounded-full bg-slate-400"></div>
                <input
                  type="text"
                  className=" outline-none py-2 w-[30rem]  "
                  placeholder="What's in your mind ?"
                />
              </div>
              <IoImageOutline size={"2rem"} />
            </div>
          </div>
          <div className=" w-full bg-white rounded-lg  flex flex-col gap-2 py-4">
            <div className=" w-full  px-8 flex flex-col gap-2">
              <div className=" w-full flex justify-between">
                <div className=" flex items-center gap-2">
                  <div className=" w-12 h-12 rounded-full bg-slate-400"></div>
                  <div className=" flex flex-col h-full  justify-center">
                    <p>Lionel Socrate</p>
                    <p className=" text-sm text-slate-400">
                      12 April at 09:20 AM
                    </p>
                  </div>
                </div>
                <IoEllipsisHorizontal size={"1.5rem"} />
              </div>
              <p>
                One of perks of working in an international company is sharing
                knowledge with your colleagues
              </p>
              <div className=" bg-slate-400 w-full h-[20rem] rounded-lg "></div>
              <div className=" w-full grid grid-cols-4">
                <div className=" flex items-center justify-center gap-2">
                  <BiComment size={"1.5rem"} />
                  <p>25 Comments</p>
                </div>
                <div className=" flex items-center justify-center gap-2">
                  <BiHeart size={"1.5rem"} />
                  <p>120k Likes</p>
                </div>
                <div className=" flex items-center justify-center gap-2">
                  <BiShare size={"1.5rem"} />
                  <p>231 Share</p>
                </div>
                <div className=" flex items-center justify-center gap-2">
                  <BiBookBookmark size={"1.5rem"} />
                  <p>12 Saved</p>
                </div>
              </div>
            </div>
            <div className=" w-full h-[1px] bg-slate-400 my-1"></div>
            <div className=" w-full  px-8  flex items-center gap-4">
              <div className=" min-w-10 w-10 h-10 rounded-full bg-slate-400"></div>
              <div className=" relative w-full">
                <input
                  type="text"
                  className=" w-full bg-[rgb(0,0,0,0.25)] rounded-xl py-2 px-4 outline-none"
                  placeholder="Write your comment..."
                />
                <div className=" absolute top-[.5rem]  right-3 flex items-center gap-2">
                  <BiFile size={"1.5rem"} />
                  <BiFace size={"1.5rem"} />
                  <IoImageOutline size={"1.5rem"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/3 flex flex-col gap-8">
          <div className=" w-full flex flex-col gap-2 py-2 bg-white rounded-lg">
            <div className=" w-full flex items-center justify-between px-4">
              <p>Somsed Stories</p>
              <IoEllipsisHorizontal />
            </div>
            <div className=" w-full h-[1px] bg-slate-300 "></div>
            <div className=" w-full px-4 flex items-center gap-2">
              <IoAddCircleOutline size={"1.75rem"} />
              <div className=" flex flex-col leading-[1.15rem] ">
                <p className=" ">Create your story</p>
                <p className=" text-sm text-slate-300">
                  click button beside to create yours
                </p>
              </div>
            </div>
            <div className=" w-full px-4 flex flex-col gap-4">
              <div className=" w-full flex items-center gap-2">
                <div className=" w-12 h-12 bg-slate-400 rounded-full"></div>
                <div className=" flex flex-col">
                  <p>Faly Randriantsoa</p>
                  <p className=" text-sm text-slate-400">
                    12 April at 09:28 PM
                  </p>
                </div>
              </div>
              <div className=" w-full flex items-center gap-2">
                <div className=" w-12 h-12 bg-slate-400 rounded-full"></div>
                <div className=" flex flex-col">
                  <p>Faly Randriantsoa</p>
                  <p className=" text-sm text-slate-400">
                    12 April at 09:28 PM
                  </p>
                </div>
              </div>
              <div className=" w-full flex items-center gap-2">
                <div className=" w-12 h-12 bg-slate-400 rounded-full"></div>
                <div className=" flex flex-col">
                  <p>Faly Randriantsoa</p>
                  <p className=" text-sm text-slate-400">
                    12 April at 09:28 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" w-full flex flex-col gap-2 py-2 bg-white rounded-lg">
            <div className=" w-full flex items-center justify-between px-4">
              <p>Events</p>
              <IoEllipsisHorizontal />
            </div>
            <div className=" w-full h-[1px] bg-slate-300 "></div>
            <div className=" w-full px-4 flex flex-col gap-4">
              <div className=" w-full flex items-center gap-2">
                <IoCalendar size={"1.25rem"} />
                <p>10 Events Invites</p>
              </div>
              <div className=" w-full flex items-center gap-2">
                <IoCalendar size={"1.25rem"} />
                <p>Proda's Invitation Birthday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
