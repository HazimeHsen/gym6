import Button from "@/components/Button";
import { servicesInfo } from "@/data";
import React from "react";

export default function page() {
  return (
    <div className="bg-[#ffffff] text-black">
      <div className="min-h-[70vh] flex flex-col items-center gap-20 py-20 w-[90%] xl:w-full mx-auto max-w-[1240px]">
        <h1 className="text-3xl font-bold  tracking-wide uppercase md:text-4xl">
          SERVICES
        </h1>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {servicesInfo.map((info) => (
            <div className="flex flex-col justify-between p-5 border-2 shadow-md bg-[#FAF9F6] rounded-2xl border-primary">
              <div>
                <div className="pb-5">
                  <h2 className="text-2xl text-[#64889b] font-bold tracking-wide md:text-3xl">
                    {info.title}
                  </h2>
                  <p className="pt-2.5 text-lg md:text-xl">{info.info}</p>
                </div>
                <div className="pb-5">
                  <h4 className="text-lg text-[#64889b] font-bold tracking-wide">
                    You will get
                  </h4>
                  <ul>
                    {info.list.map((l) => (
                      <li className="py-2.5 pl-2.5 border-b">{l}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <Button to="#" title="Book Now" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
