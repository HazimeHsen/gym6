"use client";
import React, { useEffect, useState } from "react";
import AnimatedText from "./AnimatedText";
import Button from "./Button";
import Image from "next/image";

export default function StartPage() {
  const [deviceType, setDeviceType] = useState("/images/bg2.jpg");

  useEffect(() => {
    const handleResize = () => {
      // Determine the device type based on the screen width
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setDeviceType("/images/bg2.jpg");
      } else {
        setDeviceType("/images/bg.png");
      }
    };

    // Add event listener for window resize to detect changes in device type
    window.addEventListener("resize", handleResize);

    // Call handleResize once initially to set the initial device type
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${deviceType})`,
        backgroundRepeat: "no-repeat",
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
