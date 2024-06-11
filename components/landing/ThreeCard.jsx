import { IoIosApps } from "react-icons/io";
import { CardLanding } from "./UtilsLanding";

export default function ThreeCard() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center text-white bg-[var(--bg)] ">
        <div className="flex items-center justify-center gap-6">
          <CardLanding
            icon={<IoIosApps size={"3rem"} />}
            titre={"Paperspace H100s"}
            desc={
              "NVDI H100 are now avaible via Paperspace by Domee.Buils epicAI/MI.application"
            }
          />
          <CardLanding
            icon={<IoIosApps size={"3rem"} />}
            titre={"Paperspace H100s"}
            desc={
              "NVDI H100 are now avaible via Paperspace by Domee.Buils epicAI/MI.application"
            }
          />
          <CardLanding
            icon={<IoIosApps size={"3rem"} />}
            titre={"Paperspace H100s"}
            desc={
              "NVDI H100 are now avaible via Paperspace by Domee.Buils epicAI/MI.application"
            }
          />
        </div>
      </div>
    </>
  );
}
