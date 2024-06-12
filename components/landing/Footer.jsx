import { BiCopyright } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import {
  IoCallSharp,
  IoInfiniteOutline,
  IoLocationOutline,
} from "react-icons/io5";
import { RiArrowUpDoubleLine } from "react-icons/ri";
import style from "../../styles/HeaderLanding.module.css";

export default function Footer() {
  return (
    <>
      <div className=" w-full h-[100vh] flex flex-col justify-end     ">
        <div className=" w-full py-2 px-[6rem] flex items-center justify-between bg-[var(--yellow-theme)] ">
          <p className=" text-xl text-white">
            Looking for a quality and affordable constructor your next project ?
          </p>
          <button className=" uppercase bg-[var(--bg-landing)] py-1 px-8 rounded-md text-white ">
            request a quote
          </button>
        </div>
        <div className=" w-full py-10 px-[6rem] flex gap-16 bg-[var(--bg-dark)] ">
          <div className=" flex flex-col gap-8 w-1/3">
            <div className=" flex items-center gap-2">
              <IoInfiniteOutline
                className=" text-[var(--yellow-theme)]  "
                size={"2.5rem"}
              />
              <p className=" text-[var(--yellow-theme)] text-3xl "> Infinity</p>
            </div>
            <p className=" text-[rgb(255,255,255,0.5)] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              enim saepe mollitia in necessitatibus animi delectus non facere
              commodi, dolore asperiores sit, consequuntur eaque ratione itaque
              vel ullam. Sequi, doloribus.
            </p>
            <div className=" flex items-center gap-4">
              <IoCallSharp
                size={"2.5rem"}
                className=" text-[var(--yellow-theme)] "
              />
              <div className=" flex flex-col">
                <p className=" text-white">+261 34 78 694 53 -Office</p>
                <p className=" text-white">(123) 456 7981 -Fax</p>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              <IoLocationOutline
                size={"2.5rem"}
                className=" text-[var(--yellow-theme)] "
              />
              <div className=" flex flex-col">
                <p className=" text-white">Soatsihadino Fianarantsoa</p>
                <p className=" text-white">Fianarantsoa 301 - Madagascar</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-8 w-1/3">
            <p className=" text-white text-2xl">Latest News</p>
            <div className=" w-full flex items-center gap-4">
              <div className=" w-1/3 h-[5rem] bg3 rounded-md "></div>
              <div className=" w-2/3 flex flex-col h-full justify-around">
                <p className=" text-[rgb(255,255,255,0.25)] ">Juin 15 ,2023</p>
                <p className="text-[rgb(255,255,255,0.35)] max-w-full ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  nisi eius iure!
                </p>
              </div>
            </div>
            <div className=" w-full flex items-center gap-4">
              <div className=" w-1/3 h-[5rem] bg5 rounded-md "></div>
              <div className=" w-2/3 flex flex-col h-full justify-around">
                <p className=" text-[rgb(255,255,255,0.25)] ">Aout 13 ,2024</p>
                <p className="text-[var(--yellow-theme)] max-w-full ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  nisi eius iure!
                </p>
              </div>
            </div>

            <div className=" w-max flex flex-col gap-1">
              <p className=" uppercase  font-bold text-white">all news</p>
              <div className=" h-[2px] w-1/3 bg-[var(--yellow-theme)] rounded-full "></div>
            </div>
          </div>
          <div className=" flex flex-col gap-8 w-1/3">
            <p className=" text-white text-2xl">Bussiness Hours</p>
            <div className=" flex flex-col gap-6">
              <div className=" flex items-center gap-1">
                <p className=" text-[rgb(255,255,255,0.35)] ">
                  Monday-Friday : .................
                </p>
                <p className=" text-white">9:00 am - 18:00 pm</p>
              </div>
              <div className=" flex items-center gap-1">
                <p className=" text-[rgb(255,255,255,0.35)] ">
                  Saturday : ..............................
                </p>
                <p className=" text-white">9:00 am - 18:00 pm</p>
              </div>
              <div className=" flex items-center gap-1">
                <p className=" text-[rgb(255,255,255,0.35)] ">
                  Sunday : ................................
                </p>
                <p className=" text-white">closed</p>
              </div>
            </div>
            <div className=" flex bg-[var(--bg-dark)] rounded-md overflow-hidden ">
              <input
                type="email"
                className=" outline-none py-3 px-8 text-white rounded-md bg-[var(--bg2)]"
                placeholder="Adresse Email"
              />
              <button className=" uppercase  text-white h-full bg-[var(--green)] px-6  ">
                subscribe
              </button>
            </div>
            <p className=" text-[rgb(255,255,255,0.35)] max-w-[25rem] ">
              Sign up for new <span className=" text-white"> Infinity </span>
              Construction company content updates surveys & offers.
            </p>
          </div>
        </div>
        <div className=" relative w-full py-4 px-[6rem] flex items-center justify-between bg-[rgb(3,3,3)] ">
          <div className=" flex items-center gap-6">
            <div className=" flex items-center gap-2">
              <BiCopyright className=" text-[rgb(255,255,255,0.35)] " />
              <span className=" text-[var(--yellow-theme)] ">Infinity</span>
              <p className=" text-[rgb(255,255,255,0.35)]">
                Construction company
              </p>
            </div>
            <div className=" flex items-center gap-2">
              <p className=" text-[rgb(255,255,255,0.35)] ">Design by </p>
              <p className=" text-white">Lionel Socrate</p>
            </div>
            <div className=" flex items-center gap-2">
              <p className=" text-[rgb(255,255,255,0.35)] ">Develop by</p>
              <p className=" text-white">Ti-code</p>
            </div>
          </div>
          <p className={` ${style.bgTitre1} text-4xl px-12`}>Ti-code</p>
          <div className=" absolute right-[5rem] top-[-1.25rem] w-[3rem] h-[2.5rem]  bg-[var(--yellow-theme)]  ">
            <div className=" absolute top-[-1rem] left-0 w-[3rem] h-[3rem] rotate-45 bg-[var(--yellow-theme)] rounded-sm  -skew-x-6 "></div>
            <RiArrowUpDoubleLine
              size={"1.5rem"}
              className=" absolute top-1 left-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}
