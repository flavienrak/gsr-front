"use client";
import LogIn from "./Login";
import Register from "./Register";

export default function Auth() {
  return (
    <div className="relative w-full h-full bg-[var(--bg)] flex justify-center items-center overflow-hidden">
      <LogIn />
      {/* <Register /> */}
      <div className="cadre"></div>
    </div>
  );
}
