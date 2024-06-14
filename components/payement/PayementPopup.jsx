"use client";

export default function ConfirmationPopup() {
  return (
    <>
      <div className=" fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[rgb(0,0,0,0.5)] ">
        <div className=" p-4 bg-[var(--white)] flex flex-col gap-4 rounded-md px-8 min-w-[34rem] ">
          <p className=" text-xl uppercase text-center">
            Demande d'acte d'etat civil
          </p>
          <div className=" w-full h-[2px] bg-[var(--gray)] "></div>
          <div className=" flex flex-col gap-2">
            <p className=" text-xl">Confirmer le payement</p>
            <div className=" flex flex-col gap-1">
              <p>Via le numéro</p>
              <div className=" flex flex-col px-4">
                <p>034 84 522 75 </p>
                <p>Ramamonjisoa Toavina Andrandraina</p>
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <p>Destinataire</p>
              <div className=" flex flex-col px-4">
                <p>034 70 535 12 </p>
                <p>Randriantsoa Faliarison Raphael</p>
              </div>
            </div>
          </div>
          <div className=" w-full h-[2px] bg-[var(--gray)] "></div>

          <div className=" w-full flex items-center gap-4">
            <button className=" w-1/2 py-2 bg-[var(--primary-color)] text-[var(--white)] rounded-md ">
              Anuller
            </button>
            <button className=" w-1/2 py-2 bg-[var(--blue-theme)] text-[var(--white)] rounded-md ">
              Mvola
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
