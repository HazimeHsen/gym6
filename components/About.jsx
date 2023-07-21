import { trainersInfo } from "@/data";
import React from "react";

export default function About() {
  return (
    <div className="bg-white" id="about">
      <div className="flex flex-col items-center text-center gap-20 py-20 w-[90%] xl:w-full mx-auto max-w-[1240px]">
        <div className="text-center">
          <p className="text-[#64889b] font-semibold pb-2 text-sm md:text-base">
            WE HELP YOU REACH YOUR DREAM PHYSIQUE
          </p>
          <h2 className="text-3xl font-bold tracking-wide uppercase md:text-4xl">
            Meet The Trainer
          </h2>
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          {trainersInfo.map((info) => (
            <div className="flex flex-col flex-1 bg-[#0c5c75] gap-5 max-w-lg shadow-lg shadow-slate-400 rounded-lg p-5">
              <h3 className="text-2xl font-bold md:text-3xl text-white">
                {info.name}
              </h3>
              <p className="text-md font-semibold text-white">{info.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
