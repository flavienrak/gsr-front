import Header from "./Header";
import ThreeCard from "./ThreeCard";
import SixCard from "./SixCard";
import About from "./About";
import Topbar from "../home/Topbar";

export default function Landing() {
  return (
    <>
      <div className="w-4/5 bg-[var(--color-light)] ">
        <Header />
        <ThreeCard />
        <SixCard />
        <About />
      </div>
      {/* <Link href={{ pathname: "/auth/login" }}>Se connecter</Link> <br />
      <Link href={{ pathname: "/auth/register" }}>S{"'"}inscrire</Link> */}
    </>
  );
}
