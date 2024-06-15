import { IoIosApps } from "react-icons/io";
import { CardLanding, MiniCard } from "./UtilsLanding";

export default function ThreeCard() {
  return (
    <>
      <div className=" w-full h-[100vh] flex  items-center justify-center flex-col gap-16 bg-[var(--gray)] ">
        <h1 className="font-extrabold text-6xl text-[var(--cont)] text-center ">
          Qui peuvent se connecter <br /> avec nomApp?
        </h1>
        <div className=" flex items-center justify-center gap-8 w-full flex-wrap">
          <MiniCard
            titre="Admin"
            work="Ui,Ux Designer"
            person="Lionel Socrate"
            color="pink"
          />
          <MiniCard
            titre="Organisme"
            work="Backend Developer"
            person="Flavien Ariniaina"
            color="blue"
          />
          <MiniCard
            titre="Citoyen"
            work="Frontend Developer"
            person="Faliarison Raphael"
            color="orange"
          />
        </div>
      </div>
    </>
  );
}
