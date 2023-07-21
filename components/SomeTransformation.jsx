import React from "react";
import Button from "./Button";
import { SomeImages, images } from "@/data";
import Slider from "./Slider";

export default function SomeTransformation() {
  return (
    <div className=" bg-white text-[#0c5c75] flex flex-col items-center py-20  xl:w-full  ">
      <div className="flex flex-col text-center">
        <h2 className="sm:text-2xl text-xl font-bold tracking-wide uppercase md:text-4xl">
          Some of our transformations
        </h2>
        <p className="pt-2.5 text-sm md:text-base text-black">
          Your success is our success.
        </p>
      </div>
      <div className="slider md:w-1/2 sm:w-3/4 w-full p-8 h-96 ">
        <Slider images={SomeImages} />
      </div>
      <div className="mt-10">
        <Button to="/transformations" title="EXPLORE MORE" />
      </div>
    </div>
  );
}
