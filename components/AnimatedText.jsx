"use client";
import { AdminName } from "@/data";
import { useEffect, useState } from "react";

export default function AnimatedText() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        if (currentIndex >= AdminName.length) {
          clearInterval(interval);
          return prevText;
        }
        const nextChar = AdminName.charAt(currentIndex);
        currentIndex++;
        return prevText + nextChar;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <h1 className="uppercase font-bold text-3xl">{displayedText}</h1>;
}
