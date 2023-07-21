import React from "react";
import AnimatedText from "./AnimatedText";
import Button from "./Button";
import Image from "next/image";

export default function StartPage() {
  return (
    <div
      style={{
        backgroundImage: "url(/images/bg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundClip: "border-box",
        backgroundOrigin: "border-box",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="h-screen w-screen container">
      <div className="text-white h-full flex flex-col items-center justify-center">
        <AnimatedText />
        <p className="max-w-md font-semibold text-center my-7 text-lg">
          Reach the physique that you have always dreamed of without following
          any restrictive diets or overcomplicated, ineffective workouts.
        </p>
      </div>
    </div>
  );
}
