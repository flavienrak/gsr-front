import { IoIosApps } from "react-icons/io";
import { CardLanding, MiniCard } from "./UtilsLanding";
import organisme from "../../public/images/organisme.jpg";

export default function ThreeCard() {
  return (
    <>
      <div className=" w-full h-[100vh] flex  items-center justify-center flex-col gap-16 bg-[var(--gray)] ">
        <h1 className="font-extrabold text-6xl text-[var(--cont)] text-center ">
          Se connecter en tant que :
        </h1>
        <div className=" flex items-center justify-center gap-8 w-full flex-wrap">
          <MiniCard
            titre="Admin"
            work="Administrateur"
            person=" (Gestion  des utilisateurs)"
            color="pink"
            source={"/images/admin.jpg"}
            work={
              "L'administrateur s'occupe dans la gestion des utilisateurs et assure le fonctionnement du plateforme"
            }
          />
          <MiniCard
            titre="Organisme"
            work=" Organisme"
            person="(création des services)"
            color="blue"
            source={organisme}
            work={
              "L'organisme crée des services dans le plateforme qu'on peut utiliser par les utilisateurs pour simplifier son fonctionnement "
            }
          />
          <MiniCard
            titre="Citoyen"
            work="Utilisateur simple"
            person="  (Consulter les services) "
            source={"/images/user1.jpg"}
            color="orange"
            work={
              "Les utilisateurs consultent des services et iles peuvent payer directement le cout du service à partirdu plateforme "
            }
          />
        </div>
      </div>
    </>
  );
}
