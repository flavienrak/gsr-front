import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Right from "./Right";

export default function Profil() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden">
        <Topbar />
        <div className=" bg-[var(--gray)] w-full h-full flex  gap-8 px-8 py-8 ">
          <Navbar />
          <div className=" w-3/5 flex  flex-col gap-4 overflow-y-scroll bg-[var(--white)] rounded-md "></div>
          <Right />
        </div>
      </div>
    </>
  );
}
