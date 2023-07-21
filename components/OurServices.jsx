import { ourServicesInfo } from "@/data";
import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function OurServices() {
  return (
    <div className="w-full clip text-white relative ">
      <div>
        <div className="fixed h-screen w-full left-0 top-0 z-[-10] bg-black ">
          <span
            style={{
              backgroundColor: "black",
              boxSizing: "border-box",
              display: "block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: 1,
              border: "0px",
              margin: "0px",
              padding: "0px",
              position: "absolute",
              inset: "0px",
            }}>
            <span className=" w-full h-full bg-black opacity-40 absolute top-0 left-0"></span>
            <Image
              alt="bac-Image"
              src="/images/bac.webp"
              width={1000}
              height={1000}
              style={{
                position: "absolute",
                inset: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: "0px",
                height: "0px",
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                zIndex: -100,
              }}
            />
          </span>
        </div>
        <div className="z-40 flex flex-col items-center py-20 w-[90%] sm:px-0 gap-20 justify-center xl:w-[75%] max-w-[1240px] mx-auto">
          <h2 className="text-3xl font-bold tracking-wide uppercase md:text-4xl">
            Our Services
          </h2>
          <div className="grid grid-cols-2 gap-2 md:gap-10 md:grid-cols-2">
            {ourServicesInfo.map((info) => (
              <div className="flex flex-col gap-5 p-5 md:py-10 text-center border-2 shadow-md rounded-2xl border-primary shadow-secondary">
                <div className="flex flex-row gap-2.5 justify-center items-center">
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg  font-bold tracking-widest text-center uppercase md:text-3xl">
                      {info.title}
                    </h3>
                  </div>
                </div>
                <div className="">
                  <p className="tracking-wide md:text-base text-sm">
                    {info.info}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button to="/services" title="LEARN MORE" />
        </div>
      </div>
    </div>
  );
}
