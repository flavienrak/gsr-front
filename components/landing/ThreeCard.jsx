import { IoIosApps } from "react-icons/io";
import { CardLanding, MiniCard } from "./UtilsLanding";

export default function ThreeCard() {
  return (
    <>
      <div className=" w-full h-[100vh] flex  items-center flex-col gap-16 bg-[var(--gray)] ">
        <h1 className=" text-7xl bgTitre2 uppercase">Hello every body</h1>
        <div className=" flex items-center justify-center gap-8 w-full flex-wrap">
          <MiniCard
            titre="Ti-code Team"
            work="Ui,Ux Designer"
            person="Lionel Socrate"
            color="pink"
          />
          <MiniCard
            titre="Ti-code Team"
            work="Backend Developer"
            person="Flavien Ariniaina"
            color="blue"
          />
          <MiniCard
            titre="Ti-code Team"
            work="Frontend Developer"
            person="Faliarison Raphael"
            color="orange"
          />
        </div>
      </div>
    </>
  );
}
