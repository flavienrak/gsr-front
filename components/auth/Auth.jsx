"use client";

import LogIn from "./Login";
import Register from "./Register";

import { useContext } from "react";
import { UidContext } from "@/context/UidContext";
import { motion } from "framer-motion";

export default function Auth() {
  const { currentQuery, path } = useContext(UidContext);
  return (
    <div className="relative w-full h-screen bg-[var(--bg)] flex justify-center items-center overflow-hidden">
      {currentQuery.path === "register" ? <Register /> : <LogIn />}
      <motion.div
        className={`cadre ${currentQuery.path === "register" ? "cadre-l" : ""}`}
      ></motion.div>
    </div>
  );
}
