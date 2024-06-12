import Accueil from "../home/Accueil";
import ContenuDashboard from "./ContenuDashboard";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function Dashboard() {
  return (
    <div className=" w-full h-screen bg-[var(--bg-landing)] flex  ">
      {/* <Navbar />
      <div className=" w-full h-full flex flex-col">
        <Topbar />
        <ContenuDashboard />
      </div> */}
      <Accueil />
    </div>
  );
}
